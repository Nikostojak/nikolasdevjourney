export const metadata = {
    title: 'Nikolas Dev Journey | Exploring Modern VPN Solutions: Tailscale vs Traditional Approaches',
    description: 'Comparing traditional VPN setups with modern mesh networking solutions like Tailscale, ZeroTier, and WireGuard.',
  };
  
  import Navbar from '../../../components/Navbar';
  import Footer from '../../../components/Footer';
  import Container from '../../../components/Container';
  import CodeBlock from '../../../components/CodeBlock';
  import { BlogComments } from '../../../components/Comments';
  
  export default function BlogPost() {
    return (
      <main
        className="page-layout"
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
          backgroundColor: '#1a202c',
          color: '#e2e8f0',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <Navbar />
  
        <Container>
          <article className="blog-post-section" role="article" aria-labelledby="blog-post-title">
            <h1 className="blog-post-title" id="blog-post-title">
              Exploring Modern VPN Solutions: Tailscale vs Traditional Approaches
            </h1>
  
            <div className="blog-post-content">
              <p>
                When I first needed to connect to my home server remotely, I thought setting up a VPN would be straightforward. Just install OpenVPN, configure some files, and I&apos;d be done, right? Three days and countless configuration errors later, I realized the world of VPNs had evolved far beyond traditional solutions. This post explores my journey through both traditional and modern VPN approaches, and why solutions like Tailscale are revolutionizing remote connectivity.
              </p>
  
              <h2 className="blog-post-subtitle">My First Attempt: Traditional OpenVPN</h2>
              <p>
                Like many beginners, I started with OpenVPN because it was the most mentioned solution online. The experience was... educational, to put it mildly. Here&apos;s what setting up OpenVPN looked like:
              </p>
  
              <CodeBlock 
                language="bash" 
                filename="openvpn-setup.sh"
                title="Traditional OpenVPN Setup Process"
              >
  {`# Install OpenVPN and EasyRSA
  sudo apt update
  sudo apt install openvpn easy-rsa
  
  # Set up Certificate Authority
  make-cadir ~/openvpn-ca
  cd ~/openvpn-ca
  source vars
  ./clean-all
  ./build-ca
  ./build-key-server server
  ./build-dh
  openvpn --genkey --secret keys/ta.key
  
  # Create server configuration
  sudo nano /etc/openvpn/server.conf
  
  # Server configuration (simplified)
  port 1194
  proto udp
  dev tun
  ca ca.crt
  cert server.crt
  key server.key
  dh dh2048.pem
  server 10.8.0.0 255.255.255.0
  push "redirect-gateway def1 bypass-dhcp"
  push "dhcp-option DNS 8.8.8.8"
  keepalive 10 120
  tls-auth ta.key 0
  cipher AES-256-CBC
  comp-lzo
  max-clients 10
  persist-key
  persist-tun
  status openvpn-status.log
  verb 3
  
  # Generate client certificates
  ./build-key client1
  
  # Create client configuration file
  # (Another 30+ lines of configuration)`}
              </CodeBlock>
  
              <p>
                After hours of setup, I had a working VPN, but the complexity was overwhelming. Managing certificates, configuring firewall rules, setting up port forwarding on my router, and creating individual configuration files for each device felt like operating a small PKI infrastructure just to access my home server.
              </p>
  
              <h2 className="blog-post-subtitle">The Problems with Traditional VPNs</h2>
              <p>
                As I used OpenVPN for a few weeks, several pain points became apparent:
              </p>
              <ul>
                <li><strong>Certificate Management Hell</strong>: Every new device needed certificates generated, signed, and distributed securely</li>
                <li><strong>Port Forwarding Nightmares</strong>: Required router configuration and a static IP or dynamic DNS</li>
                <li><strong>Performance Issues</strong>: All traffic routed through my home connection, creating a bottleneck</li>
                <li><strong>Client Configuration</strong>: Each device needed a complex configuration file</li>
                <li><strong>Mobile Unfriendly</strong>: Battery drain and connection drops were constant issues</li>
                <li><strong>No Mesh Networking</strong>: Everything went through the central server, even local connections</li>
              </ul>
  
              <h2 className="blog-post-subtitle">Enter WireGuard: A Breath of Fresh Air</h2>
              <p>
                Frustrated with OpenVPN&apos;s complexity, I discovered WireGuard. The difference was night and day:
              </p>
  
              <CodeBlock 
                language="bash" 
                filename="wireguard-setup.sh"
                title="WireGuard: Simplicity Itself"
              >
  {`# Install WireGuard
  sudo apt install wireguard
  
  # Generate keys
  wg genkey | tee privatekey | wg pubkey > publickey
  
  # Server configuration (/etc/wireguard/wg0.conf)
  [Interface]
  Address = 10.0.0.1/24
  PrivateKey = <server-private-key>
  ListenPort = 51820
  
  [Peer]
  PublicKey = <client-public-key>
  AllowedIPs = 10.0.0.2/32
  
  # Client configuration
  [Interface]
  Address = 10.0.0.2/24
  PrivateKey = <client-private-key>
  DNS = 8.8.8.8
  
  [Peer]
  PublicKey = <server-public-key>
  Endpoint = server.example.com:51820
  AllowedIPs = 0.0.0.0/0
  PersistentKeepalive = 25
  
  # Start WireGuard
  sudo wg-quick up wg0`}
              </CodeBlock>
  
              <p>
                WireGuard&apos;s elegance was immediately apparent. The entire configuration fit on a single screen, used modern cryptography by default, and performed significantly better than OpenVPN. But even WireGuard had limitations—I still needed to manage keys manually and handle NAT traversal myself.
              </p>
  
              <h2 className="blog-post-subtitle">The Mesh VPN Revolution</h2>
              <p>
                Then I discovered mesh VPNs, and everything changed. Instead of all traffic flowing through a central server, devices connect directly to each other when possible. This approach offers several advantages:
              </p>
  
              <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                <p><strong>Traditional VPN (Hub and Spoke)</strong></p>
                <pre style={{ display: 'inline-block', textAlign: 'left' }}>
  {`    Device A
          ↓
      VPN Server ←→ Internet
          ↑
      Device B`}
                </pre>
              </div>
  
              <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                <p><strong>Mesh VPN (Direct Connections)</strong></p>
                <pre style={{ display: 'inline-block', textAlign: 'left' }}>
  {`Device A ←→ Device B
      ↓         ↓
      Device C ←→`}
                </pre>
              </div>
  
              <h2 className="blog-post-subtitle">Tailscale: VPN Made Simple</h2>
              <p>
                Tailscale was my introduction to how modern VPNs should work. Built on WireGuard, it adds automatic key management, NAT traversal, and mesh networking. Here&apos;s how simple the setup was:
              </p>
  
              <CodeBlock 
                language="bash" 
                filename="tailscale-setup.sh"
                title="Tailscale: VPN in 60 Seconds"
              >
  {`# Install Tailscale
  curl -fsSL https://tailscale.com/install.sh | sh
  
  # Start and authenticate
  sudo tailscale up
  
  # That's it! Really!
  
  # Check your network
  tailscale status
  
  # Access other devices directly
  ssh user@device-name
  ping laptop
  curl http://home-server:8080`}
              </CodeBlock>
  
              <p>
                The contrast was stark. What took hours with OpenVPN took literally one minute with Tailscale. No certificates, no port forwarding, no configuration files. It just worked.
              </p>
  
              <h2 className="blog-post-subtitle">How Modern VPNs Solve Traditional Problems</h2>
              <p>
                Modern solutions like Tailscale, ZeroTier, and Nebula solve traditional VPN problems elegantly:
              </p>
  
              <h3>1. NAT Traversal</h3>
              <p>
                Traditional VPNs require port forwarding and public IPs. Modern solutions use techniques borrowed from WebRTC:
              </p>
              <ul>
                <li><strong>STUN</strong>: Discovers your public IP and port</li>
                <li><strong>Direct connections</strong>: Devices find each other and connect directly</li>
                <li><strong>DERP relays</strong>: Fallback when direct connection isn&apos;t possible</li>
              </ul>
  
              <h3>2. Key Management</h3>
              <p>
                Instead of manually managing certificates:
              </p>
              <ul>
                <li>Keys are generated automatically</li>
                <li>Distributed through a control plane</li>
                <li>Rotated without user intervention</li>
                <li>Devices authenticate through SSO providers</li>
              </ul>
  
              <h3>3. Performance</h3>
              <p>
                Mesh networking means:
              </p>
              <ul>
                <li>Direct peer-to-peer connections when possible</li>
                <li>Lower latency for local connections</li>
                <li>No central bottleneck</li>
                <li>Automatic failover if one path fails</li>
              </ul>
  
              <h2 className="blog-post-subtitle">Comparing Modern VPN Solutions</h2>
              <p>
                I&apos;ve tested several modern VPN solutions. Here&apos;s how they compare:
              </p>
  
              <h3>Tailscale</h3>
              <ul>
                <li><strong>Pros</strong>: Easiest setup, great documentation, reliable NAT traversal</li>
                <li><strong>Cons</strong>: Requires third-party coordination server (or self-hosted Headscale)</li>
                <li><strong>Best for</strong>: Personal use, small teams, quick deployments</li>
              </ul>
  
              <h3>ZeroTier</h3>
              <ul>
                <li><strong>Pros</strong>: Layer 2 networking, very mature, self-hostable</li>
                <li><strong>Cons</strong>: More complex than Tailscale, slower performance</li>
                <li><strong>Best for</strong>: Complex network topologies, bridging networks</li>
              </ul>
  
              <h3>Nebula (by Slack)</h3>
              <ul>
                <li><strong>Pros</strong>: Fully open source, designed for scale, no third-party dependencies</li>
                <li><strong>Cons</strong>: More manual configuration, weaker NAT traversal</li>
                <li><strong>Best for</strong>: Large organizations, full control requirements</li>
              </ul>
  
              <h3>NetBird</h3>
              <ul>
                <li><strong>Pros</strong>: Open source, good UI, self-hostable</li>
                <li><strong>Cons</strong>: Newer project, smaller community</li>
                <li><strong>Best for</strong>: Open source enthusiasts, privacy-conscious users</li>
              </ul>
  
              <h2 className="blog-post-subtitle">Real-World Use Cases</h2>
              <p>
                Here&apos;s how I use modern VPN solutions in practice:
              </p>
  
              <CodeBlock 
                language="yaml" 
                filename="use-cases.yaml"
                title="My VPN Use Cases"
              >
  {`# Home Lab Access
  - Connect to home server from anywhere
  - Access local services (Plex, Home Assistant)
  - Remote development on powerful desktop
  
  # Multi-Device Sync
  - Share files between laptop, desktop, phone
  - Access development environments from any device
  - Consistent workspace across locations
  
  # Secure Public WiFi
  - Route traffic through home connection
  - Access geo-restricted content
  - Protect sensitive data on untrusted networks
  
  # Collaborative Development
  - Share local development servers with team
  - Pair programming with screen sharing
  - Access staging environments securely
  
  # IoT Management
  - Secure access to smart home devices
  - Monitor security cameras remotely
  - Update IoT devices without exposing them to internet`}
              </CodeBlock>
  
              <h2 className="blog-post-subtitle">Self-Hosting: Taking Back Control with Headscale</h2>
              <p>
                While Tailscale&apos;s hosted solution is convenient, I wanted full control over my infrastructure. This led me to Headscale, an open-source implementation of the Tailscale control server. My journey into self-hosting Tailscale was both challenging and rewarding.
              </p>
  
              <h3>Setting Up Headscale</h3>
              <CodeBlock 
                language="bash" 
                filename="headscale-setup.sh"
                title="My Headscale Installation Process"
              >
  {`# Install Headscale on Ubuntu
  wget https://github.com/juanfont/headscale/releases/download/v0.22.3/headscale_0.22.3_linux_amd64.deb
  sudo dpkg -i headscale_0.22.3_linux_amd64.deb
  
  # Configure Headscale
  sudo nano /etc/headscale/config.yaml
  
  # My working configuration:
  server_url: https://headscale.example.com:8085
  listen_addr: 0.0.0.0:8085
  metrics_listen_addr: 127.0.0.1:9090
  
  # IP allocation
  ip_prefixes:
    - 100.64.0.0/10
    - fd7a:115c:a1e0::/48
  
  # Database
  db_type: sqlite3
  db_path: /var/lib/headscale/db.sqlite
  
  # DERP configuration (more on this later)
  derp:
    server:
      enabled: false
    urls:
      - https://controlplane.tailscale.com/derpmap/default
    paths: []
    auto_update_enabled: true
    update_frequency: 24h
  
  # Start Headscale
  sudo systemctl enable headscale
  sudo systemctl start headscale
  
  # Create a namespace (user)
  headscale namespaces create personal
  
  # Generate pre-auth key
  headscale preauthkeys create --namespace personal --reusable --expiration 24h
  
  # Check status
  headscale nodes list`}
              </CodeBlock>
  
              <h3>Nginx Reverse Proxy for HTTPS</h3>
              <p>
                Getting HTTPS to work properly was crucial for Headscale:
              </p>
              <CodeBlock 
                language="nginx" 
                filename="headscale-nginx.conf"
                title="Nginx Configuration for Headscale"
              >
  {`server {
      listen 80;
      server_name headscale.example.com;
      return 301 https://$server_name$request_uri;
  }
  
  server {
      listen 443 ssl http2;
      listen [::]:443 ssl http2;
      server_name headscale.example.com;
  
      ssl_certificate /etc/letsencrypt/live/headscale.example.com/fullchain.pem;
      ssl_certificate_key /etc/letsencrypt/live/headscale.example.com/privkey.pem;
  
      # Headscale API
      location / {
          proxy_pass http://localhost:8085;
          proxy_http_version 1.1;
          proxy_set_header Upgrade $http_upgrade;
          proxy_set_header Connection "upgrade";
          proxy_set_header Host $server_name;
          proxy_set_header X-Real-IP $remote_addr;
          proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
          proxy_set_header X-Forwarded-Proto $scheme;
          proxy_buffering off;
          proxy_request_buffering off;
          proxy_redirect http:// https://;
      }
  }`}
              </CodeBlock>
  
              <h3>Connecting Clients to Headscale</h3>
              <CodeBlock 
                language="bash" 
                filename="headscale-clients.sh"
                title="Connecting Devices to My Headscale Server"
              >
  {`# On client machines:
  # Linux
  tailscale up --login-server https://headscale.example.com:8085
  
  # macOS - had issues with network extension
  tailscale up --login-server https://headscale.example.com:8085 --accept-routes
  
  # Using pre-auth key (for servers)
  tailscale up --login-server https://headscale.example.com:8085 --authkey YOUR_KEY_HERE
  
  # Check connection
  tailscale status
  
  # Common issues I faced:
  # 1. Certificate errors - ensure valid HTTPS
  # 2. Port 8085 blocked - check firewall
  # 3. DNS issues - use IP first, then domain`}
              </CodeBlock>
  
              <h2 className="blog-post-subtitle">Understanding DERP: The Magic Behind NAT Traversal</h2>
              <p>
                DERP (Designated Encrypted Relay for Packets) servers are what make Tailscale&apos;s magic work when direct connections fail. Understanding and potentially self-hosting DERP became my next challenge.
              </p>
  
              <h3>What DERP Actually Does</h3>
              <p>
                When two devices can&apos;t connect directly (due to strict NATs or firewalls), DERP servers relay the encrypted traffic. Think of them as a fallback post office when direct delivery isn&apos;t possible.
              </p>
  
              <CodeBlock 
                language="bash" 
                filename="understanding-derp.sh"
                title="Investigating DERP Connections"
              >
  {`# Check if using DERP
  tailscale status
  # Look for relay "der" in the output
  
  # Test DERP server connectivity
  curl https://derp.example.com/derp/probe
  
  # Monitor DERP usage
  tailscale debug derp
  
  # See which DERP region you're using
  tailscale netcheck
  
  # Example output:
  Report:
    * UDP: true
    * IPv4: yes, PUBLIC_IP:PORT
    * IPv6: no
    * MappingVariesByDestIP: false
    * DERP latency:
      - sin: 32.2ms (Singapore)
      - tok: 45.1ms (Tokyo)
      - fra: 120.3ms (Frankfurt)`}
              </CodeBlock>
  
              <h3>My DERP Server Experiments</h3>
              <p>
                I spent weeks trying to self-host DERP servers. Here&apos;s what I learned:
              </p>
  
              <CodeBlock 
                language="bash" 
                filename="derp-server-attempts.sh"
                title="Attempting to Run My Own DERP Server"
              >
  {`# Building DERP from source
  git clone https://github.com/tailscale/tailscale.git
  cd tailscale/cmd/derper
  go build -o derper
  
  # Attempt 1: Basic DERP server
  ./derper -hostname derp.example.com -a :443 -certmode manual \
    -certfile /etc/letsencrypt/live/derp.example.com/fullchain.pem \
    -keyfile /etc/letsencrypt/live/derp.example.com/privkey.pem
  
  # Attempt 2: DERP with STUN
  ./derper -hostname derp.example.com -a :443 -stun -certmode letsencrypt
  
  # Attempt 3: Behind nginx (this was tricky!)
  ./derper -hostname derp.example.com -a :8090 -stun-port 3478 -certmode manual
  
  # The nginx config that finally worked:
  # Note: DERP needs WebSocket support
  location /derp {
      proxy_pass http://127.0.0.1:8090;
      proxy_http_version 1.1;
      proxy_set_header Upgrade $http_upgrade;
      proxy_set_header Connection "upgrade";
      proxy_set_header Host $host;
      proxy_buffering off;
      proxy_read_timeout 86400;
  }
  
  # STUN needs UDP (can't proxy through nginx)
  # Had to open port 3478 directly in firewall`}
              </CodeBlock>
  
              <h3>DERP Configuration in Headscale</h3>
              <p>
                Integrating custom DERP servers with Headscale was complex:
              </p>
  
              <CodeBlock 
                language="yaml" 
                filename="custom-derp-config.yaml"
                title="Custom DERP Configuration"
              >
  {`# Embedded DERP in Headscale (experimental)
  derp:
    server:
      enabled: true
      region_id: 999
      region_code: "custom"
      region_name: "My Region"
      stun_listen_addr: "0.0.0.0:3478"
  
  # Using custom DERP map
  derp:
    server:
      enabled: false
    urls: []  # Disable default Tailscale DERP
    paths:
      - /etc/headscale/derp.json
  
  # My custom derp.json:
  {
    "regions": {
      "900": {
        "regionid": 900,
        "regioncode": "myderp",
        "regionname": "My DERP",
        "nodes": [{
          "name": "1",
          "regionid": 900,
          "hostname": "derp.example.com",
          "ipv4": "YOUR_IP",
          "stunport": 3478,
          "stunonly": false,
          "derpport": 443
        }]
      }
    }
  }`}
              </CodeBlock>
  
              <h3>DERP Challenges and Lessons</h3>
              <p>
                My DERP journey taught me several hard lessons:
              </p>
              <ul>
                <li><strong>TLS is mandatory</strong>: DERP clients expect HTTPS, self-signed certificates don&apos;t work</li>
                <li><strong>Port conflicts</strong>: DERP wants port 443, but so does everything else</li>
                <li><strong>STUN requirements</strong>: UDP port 3478 must be accessible for NAT traversal</li>
                <li><strong>Bandwidth costs</strong>: DERP servers can use significant bandwidth when relaying</li>
                <li><strong>Monitoring is hard</strong>: Limited visibility into DERP performance</li>
                <li><strong>Updates break things</strong>: DERP protocol changes with Tailscale updates</li>
              </ul>
  
              <h3>My Current Setup</h3>
              <p>
                After all the experimentation, here&apos;s what actually works:
              </p>
  
              <CodeBlock 
                language="bash" 
                filename="working-setup.sh"
                title="My Production Headscale + DERP Setup"
              >
  {`# Headscale with Tailscale's DERP servers
  # (Most reliable option)
  derp:
    server:
      enabled: false
    urls:
      - https://controlplane.tailscale.com/derpmap/default
    auto_update_enabled: true
    update_frequency: 24h
  
  # Firewall rules
  sudo ufw allow 8085/tcp comment 'Headscale API'
  sudo ufw allow 3478/udp comment 'STUN'
  sudo ufw allow 443/tcp comment 'HTTPS'
  
  # Monitoring setup
  # Prometheus metrics from Headscale
  curl http://localhost:9090/metrics | grep headscale
  
  # Log aggregation
  tail -f /var/log/headscale/headscale.log | grep -E "DERP|relay"
  
  # Backup script
  #!/bin/bash
  # Backup Headscale data
  systemctl stop headscale
  cp /var/lib/headscale/db.sqlite /backup/headscale-$(date +%Y%m%d).db
  systemctl start headscale`}
              </CodeBlock>
  
              <p>
                Self-hosting the control plane with Headscale while using Tailscale&apos;s DERP infrastructure gave me the best balance of control and reliability. Running custom DERP servers remains an ongoing experiment—fascinating but not yet production-ready for my needs.
              </p>
  
              <h2 className="blog-post-subtitle">Performance Comparisons</h2>
              <p>
                I ran some informal benchmarks on my setup:
              </p>
  
              <CodeBlock 
                language="text" 
                filename="performance.txt"
                title="VPN Performance Tests"
              >
  {`Test: File transfer between two devices on different networks
  Baseline (no VPN): 95 Mbps
  
  OpenVPN (AES-256): 
  - Throughput: 45 Mbps
  - CPU usage: 60%
  - Latency: +25ms
  
  WireGuard (raw):
  - Throughput: 85 Mbps
  - CPU usage: 15%
  - Latency: +5ms
  
  Tailscale (direct connection):
  - Throughput: 82 Mbps
  - CPU usage: 18%
  - Latency: +6ms
  
  Tailscale (DERP relay):
  - Throughput: 50 Mbps
  - CPU usage: 20%
  - Latency: +30ms
  
  ZeroTier:
  - Throughput: 70 Mbps
  - CPU usage: 25%
  - Latency: +10ms`}
              </CodeBlock>
  
              <p>
                WireGuard-based solutions consistently outperformed OpenVPN, with Tailscale&apos;s direct connections nearly matching raw WireGuard performance.
              </p>
  
              <h2 className="blog-post-subtitle">Lessons Learned</h2>
              <p>
                My journey through VPN technologies taught me several valuable lessons:
              </p>
              <ul>
                <li><strong>Simple is better</strong>: Complex configurations lead to security mistakes</li>
                <li><strong>Modern protocols matter</strong>: WireGuard&apos;s performance advantage is real</li>
                <li><strong>Mesh Hub-and-spoke</strong>: Direct connections improve everything</li>
                <li><strong>Automation is key</strong>: Manual key management doesn&apos;t scale</li>
                <li><strong>Consider your needs</strong>: Not everyone needs a complex setup</li>
                <li><strong>Test everything</strong>: What works for others might not work for you</li>
              </ul>
  
              <h2 className="blog-post-subtitle">Choosing the Right Solution</h2>
              <p>
                Here&apos;s my decision framework for choosing a VPN solution:
              </p>
              <ul>
                <li><strong>Just need it to work?</strong> → Tailscale</li>
                <li><strong>Need Layer 2 networking?</strong> → ZeroTier</li>
                <li><strong>Full control and scale?</strong> → Nebula or self-hosted Headscale</li>
                <li><strong>Learning networking?</strong> → Start with WireGuard</li>
                <li><strong>Legacy requirements?</strong> → OpenVPN (but consider modernizing)</li>
              </ul>
  
              <h2 className="blog-post-subtitle">The Future of VPNs</h2>
              <p>
                The shift from traditional to modern VPNs represents a fundamental change in how we think about secure networking. Instead of building walls and gates, we&apos;re creating secure, direct paths between devices. This approach aligns better with our modern, distributed world where the perimeter is everywhere and nowhere.
              </p>
              <p>
                As I continue exploring these technologies, I&apos;m excited about innovations like:
              </p>
              <ul>
                <li>Better mobile support with improved battery life</li>
                <li>Integration with service mesh technologies</li>
                <li>Post-quantum cryptography preparations</li>
                <li>Decentralized coordination servers</li>
                <li>Native operating system integration</li>
              </ul>
  
              <blockquote className="blog-post-quote">
                &quot;Moving from OpenVPN to modern mesh VPNs was like upgrading from a flip phone to a smartphone. Both make calls, but one transforms how you think about communication. Modern VPNs don&apos;t just connect networks—they reimagine what secure networking can be.&quot;
              </blockquote>
            </div>
          </article>
  
          <BlogComments />
          
        </Container>
  
        <Footer />
      </main>
    );
  }