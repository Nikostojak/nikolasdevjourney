export const metadata = {
    title: 'Nikolas Dev Journey | Learning Linux: Setting Up My First VPS',
    description: 'My journey from Windows user to Linux server administrator, learning SSH, security, and cloud infrastructure along the way.',
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
              Learning Linux: Setting Up My First VPS
            </h1>
  
            <div className="blog-post-content">
              <p>
                The terminal used to intimidate me. That black screen with cryptic commands felt like something only &quot;real&quot; developers used. But when I decided to set up my first Virtual Private Server (VPS), I had no choice but to dive into Linux. What followed was one of the most empowering learning experiences of my development journey.
              </p>
              <p>
                This post chronicles my transformation from a Windows user who barely knew what SSH meant to someone who now manages Linux servers with confidence. If you&apos;re hesitant about taking the Linux plunge, I hope my story encourages you to take that first step.
              </p>
  
              <h2 className="blog-post-subtitle">Why I Needed a VPS</h2>
              <p>
                As my development skills grew, I kept hitting limitations with local development. I wanted to:
              </p>
              <ul>
                <li>Host projects that could be accessed from anywhere</li>
                <li>Learn server administration and DevOps basics</li>
                <li>Have a playground for experimenting with different technologies</li>
                <li>Understand how real web applications are deployed</li>
                <li>Set up services that need to run 24/7</li>
              </ul>
              <p>
                After researching various providers, I chose Hetzner. Their prices were reasonable (starting at €3.79/month), they had data centers in Europe, and their documentation seemed beginner-friendly. Little did I know that clicking &quot;Create Server&quot; would begin an intense learning journey.
              </p>
  
              <h2 className="blog-post-subtitle">First Contact: SSH and Terminal Basics</h2>
              <p>
                When Hetzner sent me my server credentials, I stared at them confused. IP address? Root password? SSH? These terms were foreign to me. My first challenge was simply connecting to the server.
              </p>
  
              <CodeBlock 
                language="bash" 
                filename="first-ssh.sh"
                title="My First SSH Connection"
              >
  {`# The command that started it all
  ssh root@49.13.80.27
  
  # I was greeted with:
  The authenticity of host '49.13.80.27' can't be established.
  ED25519 key fingerprint is SHA256:...
  Are you sure you want to continue connecting (yes/no)?
  
  # After typing 'yes' and entering the password:
  Welcome to Ubuntu 22.04.3 LTS (GNU/Linux 5.15.0-88-generic x86_64)
  root@ubuntu-2gb-fsn1-2:~#`}
              </CodeBlock>
  
              <p>
                That moment when I saw the command prompt change to show I was on a different machine—it was magical. I was controlling a computer hundreds of miles away with just text commands. But the magic quickly turned to panic when I realized I didn&apos;t know any Linux commands!
              </p>
  
              <h2 className="blog-post-subtitle">Learning Essential Linux Commands</h2>
              <p>
                I spent the first week learning basic Linux commands. Each one felt like unlocking a new superpower:
              </p>
  
              <CodeBlock 
                language="bash" 
                filename="essential-commands.sh"
                title="Linux Commands That Changed My Life"
              >
  {`# Navigation and file management
  pwd                    # Where am I?
  ls -la                 # What's here? (show hidden files too)
  cd /var/log           # Go to log directory
  mkdir projects         # Create a directory
  rm -rf old_folder     # Remove directory (careful with this!)
  
  # File operations
  touch newfile.txt      # Create empty file
  nano newfile.txt       # Edit file (beginner-friendly editor)
  cat file.txt          # Display file contents
  grep "error" log.txt  # Search for text in files
  chmod 755 script.sh   # Change file permissions
  
  # System information
  df -h                 # Disk space usage
  free -m               # Memory usage
  top                   # Running processes (press 'q' to quit)
  ps aux                # List all processes
  uname -a              # System information
  
  # Package management (Ubuntu/Debian)
  apt update            # Update package list
  apt upgrade           # Upgrade installed packages
  apt install nginx     # Install new software
  apt remove nginx      # Remove software
  
  # Network commands
  ip addr               # Show network interfaces
  ping google.com       # Test connectivity
  netstat -tlnp        # Show listening ports
  curl ifconfig.me     # Get public IP address
  
  # User management
  adduser nikolas       # Create new user
  passwd nikolas        # Change password
  su - nikolas          # Switch user
  exit                  # Return to previous user`}
              </CodeBlock>
  
              <p>
                What amazed me was how logical everything was. Unlike GUI applications where features are hidden in menus, Linux commands do exactly what they say. <code>cp</code> copies, <code>mv</code> moves, <code>rm</code> removes. The simplicity was beautiful.
              </p>
  
              <h2 className="blog-post-subtitle">My First Big Mistake: Learning About Permissions</h2>
              <p>
                About two weeks in, I made a classic rookie mistake. I was trying to make a script executable and ran:
              </p>
  
              <CodeBlock 
                language="bash" 
                filename="permission-mistake.sh"
                title="The Command That Taught Me Respect"
              >
  {`# DON'T DO THIS!
  chmod 777 /
  
  # What I meant to do:
  chmod 777 ./myscript.sh
  
  # The result: Permission denied errors everywhere!`}
              </CodeBlock>
  
              <p>
                I had accidentally changed permissions on the root directory, breaking numerous system functions. This mistake taught me two crucial lessons:
              </p>
              <ul>
                <li><strong>Always double-check commands</strong>, especially with <code>sudo</code> or as root</li>
                <li><strong>Understand what you&apos;re doing</strong> before executing commands</li>
              </ul>
              <p>
                Thankfully, Hetzner had a rescue system that let me boot from a recovery image and fix the permissions. It was a stressful few hours, but I learned more about Linux permissions than any tutorial could have taught me.
              </p>
  
              <h2 className="blog-post-subtitle">Securing the Server: My Introduction to Linux Security</h2>
              <p>
                Once I could navigate Linux comfortably, I learned that having a server on the internet is like having a house with a thousand doors—you need to lock them properly. Here&apos;s what I learned about basic server security:
              </p>
  
              <CodeBlock 
                language="bash" 
                filename="security-setup.sh"
                title="Essential Security Setup"
              >
  {`# 1. Create a non-root user
  adduser nikolas
  usermod -aG sudo nikolas
  
  # 2. Set up SSH key authentication
  # On local machine:
  ssh-keygen -t ed25519 -C "nikolas@email.com"
  
  # Copy public key to server:
  ssh-copy-id nikolas@49.13.80.27
  
  # 3. Disable root login and password authentication
  sudo nano /etc/ssh/sshd_config
  # Set these values:
  # PermitRootLogin no
  # PasswordAuthentication no
  # PubkeyAuthentication yes
  
  # Restart SSH service
  sudo systemctl restart ssh
  
  # 4. Set up firewall
  sudo ufw allow 22/tcp      # SSH
  sudo ufw allow 80/tcp      # HTTP
  sudo ufw allow 443/tcp     # HTTPS
  sudo ufw enable
  
  # 5. Install fail2ban to prevent brute force attacks
  sudo apt install fail2ban
  sudo systemctl enable fail2ban
  
  # 6. Keep system updated
  sudo apt update && sudo apt upgrade -y
  
  # 7. Set up automatic security updates
  sudo apt install unattended-upgrades
  sudo dpkg-reconfigure --priority=low unattended-upgrades`}
              </CodeBlock>
  
              <p>
                The difference in login attempts was immediate. Before securing the server, the logs showed hundreds of failed login attempts daily. After implementing these measures, my server became practically invisible to automated attacks.
              </p>
  
              <h2 className="blog-post-subtitle">Installing My First Services</h2>
              <p>
                With a secure server, I was ready to install actual services. I started with the classics:
              </p>
  
              <h3>Nginx Web Server</h3>
              <CodeBlock 
                language="bash" 
                filename="nginx-setup.sh"
                title="Setting Up Nginx"
              >
  {`# Install Nginx
  sudo apt install nginx
  
  # Check if it's running
  sudo systemctl status nginx
  
  # Enable it to start on boot
  sudo systemctl enable nginx
  
  # Create a simple website
  sudo mkdir -p /var/www/mysite
  sudo nano /var/www/mysite/index.html
  
  # Configure Nginx
  sudo nano /etc/nginx/sites-available/mysite
  # Added this configuration:
  server {
      listen 80;
      server_name _;
      root /var/www/mysite;
      index index.html;
  }
  
  # Enable the site
  sudo ln -s /etc/nginx/sites-available/mysite /etc/nginx/sites-enabled/
  sudo nginx -t  # Test configuration
  sudo systemctl reload nginx`}
              </CodeBlock>
  
              <h3>Docker: A Game Changer</h3>
              <p>
                Docker was the technology that really excited me. The ability to run applications in containers, isolated from each other, felt like magic:
              </p>
  
              <CodeBlock 
                language="bash" 
                filename="docker-setup.sh"
                title="Docker Installation and First Container"
              >
  {`# Install Docker
  curl -fsSL https://get.docker.com -o get-docker.sh
  sudo sh get-docker.sh
  
  # Add user to docker group (avoid using sudo)
  sudo usermod -aG docker $USER
  
  # Test Docker
  docker run hello-world
  
  # Run a real application
  docker run -d -p 8080:80 --name my-nginx nginx
  
  # See running containers
  docker ps
  
  # Check logs
  docker logs my-nginx
  
  # Stop and remove container
  docker stop my-nginx
  docker rm my-nginx
  
  # Docker Compose for complex setups
  sudo apt install docker-compose
  
  # Create docker-compose.yml
  version: '3'
  services:
    web:
      image: nginx
      ports:
        - "80:80"
      volumes:
        - ./website:/usr/share/nginx/html`}
              </CodeBlock>
  
              <p>
                Docker opened up a world of possibilities. Suddenly, I could run complex applications without worrying about dependencies or configuration conflicts. Each application lived in its own container, making the server much easier to manage.
              </p>
  
              <h2 className="blog-post-subtitle">Monitoring and Maintenance</h2>
              <p>
                As I added more services, I learned the importance of monitoring. A server is like a garden—it needs regular attention:
              </p>
  
              <CodeBlock 
                language="bash" 
                filename="monitoring.sh"
                title="Server Monitoring Basics"
              >
  {`# Check system resources
  htop  # Interactive process viewer (install with: sudo apt install htop)
  
  # Monitor disk usage
  df -h
  du -sh /var/log/*  # Find large files in logs
  
  # Check service status
  systemctl status nginx
  systemctl status docker
  
  # View recent logs
  journalctl -xe
  journalctl -u nginx -f  # Follow nginx logs
  
  # Set up log rotation
  sudo nano /etc/logrotate.d/myapp
  
  # Basic monitoring script
  #!/bin/bash
  echo "=== System Health Check ==="
  echo "Memory Usage:"
  free -m
  echo -e "\nDisk Usage:"
  df -h
  echo -e "\nTop 5 CPU Processes:"
  ps aux --sort=-%cpu | head -6
  
  # Make it executable and schedule with cron
  chmod +x health_check.sh
  crontab -e
  # Add: 0 * * * * /home/nikolas/health_check.sh`}
              </CodeBlock>
  
              <h2 className="blog-post-subtitle">Backup Strategies I Learned the Hard Way</h2>
              <p>
                Three months into my VPS journey, I accidentally deleted an important configuration file. That&apos;s when I learned the critical importance of backups:
              </p>
  
              <CodeBlock 
                language="bash" 
                filename="backup-strategy.sh"
                title="My Backup Approach"
              >
  {`# Simple backup script
  #!/bin/bash
  BACKUP_DIR="/home/nikolas/backups"
  DATE=$(date +%Y%m%d_%H%M%S)
  
  # Create backup directory
  mkdir -p $BACKUP_DIR
  
  # Backup important files
  tar -czf $BACKUP_DIR/config_$DATE.tar.gz /etc/nginx /etc/ssh
  tar -czf $BACKUP_DIR/data_$DATE.tar.gz /var/www
  
  # Backup Docker volumes
  docker run --rm \
    -v myapp_data:/data \
    -v $BACKUP_DIR:/backup \
    alpine tar czf /backup/docker_data_$DATE.tar.gz /data
  
  # Keep only last 7 days of backups
  find $BACKUP_DIR -name "*.tar.gz" -mtime +7 -delete
  
  # Sync to remote location (optional)
  # rsync -avz $BACKUP_DIR/ user@backup-server:/backups/`}
              </CodeBlock>
  
              <h2 className="blog-post-subtitle">Resource Management: Learning to Optimize</h2>
              <p>
                With a 2GB RAM server, I quickly learned about resource constraints. Here&apos;s how I optimized my setup:
              </p>
              <ul>
                <li><strong>Swap space</strong>: Added 2GB swap for memory overflow</li>
                <li><strong>Service tuning</strong>: Adjusted Nginx worker processes</li>
                <li><strong>Container limits</strong>: Set memory limits on Docker containers</li>
                <li><strong>Log rotation</strong>: Prevented logs from filling the disk</li>
                <li><strong>Monitoring</strong>: Set up alerts for high resource usage</li>
              </ul>
  
              <h2 className="blog-post-subtitle">Automation: Making Life Easier</h2>
              <p>
                As I became more comfortable, I started automating repetitive tasks:
              </p>
  
              <CodeBlock 
                language="bash" 
                filename="automation.sh"
                title="Automation Scripts"
              >
  {`# Update script
  #!/bin/bash
  echo "Starting system update..."
  sudo apt update
  sudo apt upgrade -y
  sudo apt autoremove -y
  sudo apt autoclean
  echo "Update complete!"
  
  # Docker cleanup script
  #!/bin/bash
  echo "Cleaning up Docker..."
  docker system prune -af --volumes
  echo "Docker cleanup complete!"
  
  # Service health check
  #!/bin/bash
  services=("nginx" "docker" "ssh")
  for service in "\${services[@]}"
  do
      if systemctl is-active --quiet \$service; then
          echo "\$service is running"
      else
          echo "\$service is not running! Attempting restart..."
          sudo systemctl restart \$service
      fi
  done`}
              </CodeBlock>
  
              <h2 className="blog-post-subtitle">Lessons Learned and Best Practices</h2>
              <p>
                After months of managing my VPS, here are the key lessons I&apos;ve learned:
              </p>
              <ul>
                <li><strong>Start small</strong>: Don&apos;t try to learn everything at once</li>
                <li><strong>Document everything</strong>: Keep notes on what you install and configure</li>
                <li><strong>Test in Docker first</strong>: Containers are easier to clean up than system-wide installs</li>
                <li><strong>Automate early</strong>: If you do something twice, write a script</li>
                <li><strong>Monitor proactively</strong>: It&apos;s better to prevent problems than fix them</li>
                <li><strong>Keep it simple</strong>: Complex setups are harder to maintain</li>
                <li><strong>Learn from mistakes</strong>: Every error is a learning opportunity</li>
              </ul>
  
              <h2 className="blog-post-subtitle">Resources That Helped Me</h2>
              <p>
                For anyone starting their Linux journey, these resources were invaluable:
              </p>
              <ul>
                <li><strong>Linux Journey</strong>: Free online course for beginners</li>
                <li><strong>DigitalOcean Tutorials</strong>: Excellent step-by-step guides</li>
                <li><strong>The Linux Command Line</strong> book: Comprehensive reference</li>
                <li><strong>r/linuxquestions</strong>: Reddit community for help</li>
                <li><strong>Arch Wiki</strong>: Detailed documentation (works for other distros too)</li>
              </ul>
  
              <h2 className="blog-post-subtitle">My Journey with Tailscale and Headscale</h2>
              <p>
                As I got comfortable with basic server administration, I wanted to explore modern VPN solutions. This led me to Tailscale and eventually to self-hosting my own control server with Headscale.
              </p>
  
              <h3>Starting with Tailscale</h3>
              <CodeBlock 
                language="bash" 
                filename="tailscale-journey.sh"
                title="My First Tailscale Experience"
              >
  {`# Installing Tailscale was surprisingly simple
  curl -fsSL https://tailscale.com/install.sh | sh
  
  # Starting Tailscale
  sudo tailscale up
  
  # The magic - instant connectivity
  tailscale status
  # My laptop could now SSH to my VPS using:
  ssh root@vps-hostname
  
  # No port forwarding, no firewall rules, it just worked!
  
  # Checking my Tailscale IP
  ip addr show tailscale0
  # 100.101.102.103 - my unique Tailscale IP
  
  # The revelation: I could access my VPS from anywhere
  # Coffee shop WiFi? No problem
  # Behind strict corporate firewall? Still works
  # Mobile hotspot? Yep!`}
              </CodeBlock>
  
              <h3>Moving to Headscale for Self-Hosting</h3>
              <p>
                While Tailscale was amazing, I wanted to understand the technology better and have full control over my infrastructure. Enter Headscale:
              </p>
  
              <CodeBlock 
                language="bash" 
                filename="headscale-adventure.sh"
                title="Self-Hosting with Headscale"
              >
  {`# Setting up Headscale on my Hetzner VPS
  cd /tmp
  wget https://github.com/juanfont/headscale/releases/latest/download/headscale_0.22.3_linux_amd64.deb
  sudo dpkg -i headscale_0.22.3_linux_amd64.deb
  
  # Configuring Headscale
  sudo nano /etc/headscale/config.yaml
  
  # Key configuration changes I made:
  server_url: https://vpn.mydomain.com:8085
  listen_addr: 0.0.0.0:8085
  ip_prefixes:
    - 100.64.0.0/10
  
  # Setting up PostgreSQL instead of SQLite
  sudo apt install postgresql
  sudo -u postgres createdb headscale
  sudo -u postgres createuser headscale
  
  # Starting Headscale
  sudo systemctl enable headscale
  sudo systemctl start headscale
  
  # Creating my first user
  sudo headscale users create nikolas
  
  # The moment of truth - connecting a client
  tailscale up --login-server https://vpn.mydomain.com:8085
  
  # It failed! Time to debug...`}
              </CodeBlock>
  
              <h3>Nginx and HTTPS Challenges</h3>
              <p>
                Getting HTTPS working properly with Headscale was my first major challenge:
              </p>
  
              <CodeBlock 
                language="nginx" 
                filename="headscale-nginx.conf"
                title="Nginx Reverse Proxy Struggles"
              >
  {`# First attempt - didn't work
  server {
      listen 443 ssl;
      server_name vpn.mydomain.com;
      
      location / {
          proxy_pass http://localhost:8085;
      }
  }
  
  # After hours of debugging, this worked:
  server {
      listen 443 ssl http2;
      server_name vpn.mydomain.com;
      
      ssl_certificate /etc/letsencrypt/live/vpn.mydomain.com/fullchain.pem;
      ssl_certificate_key /etc/letsencrypt/live/vpn.mydomain.com/privkey.pem;
      
      location / {
          proxy_pass http://localhost:8085;
          proxy_http_version 1.1;
          proxy_set_header Upgrade $http_upgrade;
          proxy_set_header Connection "upgrade";
          proxy_set_header Host $server_name;
          proxy_buffering off;
          proxy_set_header X-Real-IP $remote_addr;
          proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
          proxy_set_header X-Forwarded-Proto $scheme;
          proxy_redirect http:// https://;
          proxy_read_timeout 86400;
      }
  }
  
  # The key was WebSocket support and proper headers!`}
              </CodeBlock>
  
              <h3>DNS and DuckDNS Setup</h3>
              <p>
                Not having a domain initially, I discovered DuckDNS for free dynamic DNS:
              </p>
  
              <CodeBlock 
                language="bash" 
                filename="duckdns-setup.sh"
                title="Setting Up DuckDNS"
              >
  {`# Getting my free subdomain: projectvpn.duckdns.org
  
  # Creating update script
  cat > ~/duckdns/duck.sh << 'EOF'
  #!/bin/bash
  echo url="https://www.duckdns.org/update?domains=projectvpn&token=MY_TOKEN&ip=" | curl -k -o ~/duckdns/duck.log -K -
  EOF
  
  chmod 700 ~/duckdns/duck.sh
  
  # Adding to crontab for automatic updates
  crontab -e
  # Added: */5 * * * * ~/duckdns/duck.sh >/dev/null 2>&1
  
  # Getting Let's Encrypt certificate for DuckDNS domain
  sudo certbot certonly --standalone -d projectvpn.duckdns.org
  
  # Now Headscale could use HTTPS!
  server_url: https://projectvpn.duckdns.org`}
              </CodeBlock>
  
              <h2 className="blog-post-subtitle">DERP Servers: The Deep Dive</h2>
              <p>
                Understanding DERP (Designated Encrypted Relay for Packets) servers became my next obsession. These servers handle connections when direct peer-to-peer isn&apos;t possible.
              </p>
  
              <h3>My DERP Learning Journey</h3>
              <CodeBlock 
                language="bash" 
                filename="derp-exploration.sh"
                title="Exploring DERP Servers"
              >
  {`# First, understanding what DERP does
  tailscale netcheck
  # Showed me which DERP regions were closest
  
  # Attempting to run my own DERP
  git clone https://github.com/tailscale/tailscale.git
  cd tailscale/cmd/derper
  go build
  
  # First attempt - port conflict with Nginx
  ./derper -hostname projectvpn.duckdns.org -a :443
  
  # Second attempt - different port
  ./derper -hostname projectvpn.duckdns.org -a :8443 -c derper.crt -k derper.key
  
  # Testing DERP connectivity
  curl https://projectvpn.duckdns.org:8443/derp/probe
  
  # Integrating with Headscale - in config.yaml:
  derp:
    server:
      enabled: true
      region_id: 999
      region_code: "custom"
      region_name: "My DERP"
      stun_listen_addr: "0.0.0.0:3478"
  
  # But it didn't work as expected...`}
              </CodeBlock>
  
              <h3>DERP Troubleshooting Saga</h3>
              <p>
                I spent days troubleshooting DERP issues. Here&apos;s what I learned:
              </p>
  
              <CodeBlock 
                language="bash" 
                filename="derp-debugging.sh"
                title="DERP Debugging Journey"
              >
  {`# Problem 1: Certificate issues
  # DERP clients expect valid HTTPS certificates
  # Self-signed didn't work!
  
  # Solution: Use Let's Encrypt
  ./derper -hostname projectvpn.duckdns.org -certmode letsencrypt
  
  # Problem 2: Firewall blocking STUN
  # STUN needs UDP port 3478
  sudo ufw allow 3478/udp
  
  # Problem 3: Nginx interference
  # Can't proxy DERP easily - it needs WebSocket + HTTP/2
  
  # My working DERP behind Nginx (sort of):
  location /derp {
      proxy_pass http://127.0.0.1:8090;
      proxy_http_version 1.1;
      proxy_set_header Upgrade $http_upgrade;
      proxy_set_header Connection "upgrade";
      proxy_buffering off;
  }
  
  # Monitoring DERP connections
  sudo tcpdump -i any port 3478 or port 8443
  
  # Checking if clients use my DERP
  tailscale status
  # Look for "relay: self" vs "relay: fra" (Frankfurt)`}
              </CodeBlock>
  
              <h3>Current Setup Reality</h3>
              <p>
                After all the experimentation, here&apos;s what actually works reliably:
              </p>
  
              <CodeBlock 
                language="yaml" 
                filename="production-setup.yaml"
                title="What Actually Works in Production"
              >
  {`# Headscale config that works:
  server_url: https://projectvpn.duckdns.org
  listen_addr: 0.0.0.0:8085
  
  # Using Tailscale's DERP servers (reliable!)
  derp:
    server:
      enabled: false  # Embedded DERP was unstable
    urls:
      - https://controlplane.tailscale.com/derpmap/default
    auto_update_enabled: true
  
  # Backup everything!
  backup_script: |
    #!/bin/bash
    # Backup Headscale database daily
    systemctl stop headscale
    cp /var/lib/headscale/db.sqlite /backup/headscale-$(date +%Y%m%d).db
    systemctl start headscale
    
    # Keep last 7 days
    find /backup -name "headscale-*.db" -mtime +7 -delete
  
  # Monitoring
  prometheus_listen_addr: "127.0.0.1:9090"
  
  # Lessons learned:
  # 1. Start simple - don't try custom DERP immediately
  # 2. Tailscale's DERP servers are really good
  # 3. Focus on getting basics working first
  # 4. Document everything - you'll forget the details!`}
              </CodeBlock>
            </div>
          </article>
  
          <BlogComments />
          
        </Container>
  
        <Footer />
      </main>
    );
  }