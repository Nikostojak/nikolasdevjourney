export const metadata = {
    title: 'Nikolas Dev Journey | Understanding Network Security: What I Learned Building Network Tools',
    description: 'My journey into network security fundamentals, from firewall rules to encryption, Zero Trust architecture, and best practices for secure infrastructure.',
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
              Understanding Network Security: What I Learned Building Network Tools
            </h1>
  
            <div className="blog-post-content">
              <p>
                When I first exposed my server to the internet, I naively thought a strong password would be enough security. Within hours, my logs showed thousands of failed login attempts from IP addresses around the world. That was my wake-up call to the reality of network security. This post shares my journey from security ignorance to implementing defense-in-depth strategies that actually work.
              </p>
  
              <h2 className="blog-post-subtitle">The Shocking Reality: My First Security Logs</h2>
              <p>
                After setting up my first VPS, I decided to check the authentication logs out of curiosity. What I found was terrifying:
              </p>
  
              <CodeBlock 
                language="bash" 
                filename="security-wake-up.sh"
                title="My First Look at Attack Attempts"
              >
  {`# Checking SSH authentication logs
  sudo tail -f /var/log/auth.log
  
  # What I saw:
  Failed password for root from 185.234.219.x port 45832 ssh2
  Failed password for root from 185.234.219.x port 45832 ssh2
  Failed password for invalid user admin from 103.145.23.x port 53281 ssh2
  Failed password for invalid user test from 45.132.194.x port 38745 ssh2
  Failed password for invalid user ubuntu from 167.248.133.x port 42365 ssh2
  Failed password for invalid user postgres from 89.185.45.x port 55234 ssh2
  
  # Counting attack attempts
  grep "Failed password" /var/log/auth.log | wc -l
  # Result: 15,847 attempts in just 24 hours!
  
  # Unique attacking IPs
  grep "Failed password" /var/log/auth.log | awk '{print $11}' | sort -u | wc -l
  # Result: 1,258 different IP addresses`}
              </CodeBlock>
  
              <p>
                This was just one day on a fresh server with nothing important on it. The internet truly is a hostile environment, and security isn&apos;t optional—it&apos;s essential for survival.
              </p>
  
              <h2 className="blog-post-subtitle">Understanding Attack Vectors</h2>
              <p>
                As I researched these attacks, I learned about common vectors that attackers use:
              </p>
  
              <h3>1. Brute Force Attacks</h3>
              <p>
                Automated bots trying common usernames and passwords:
              </p>
              <CodeBlock 
                language="text" 
                filename="common-attempts.txt"
                title="Most Common Attack Patterns I Observed"
              >
  {`Common usernames attempted:
  - root (45% of attempts)
  - admin (12%)
  - ubuntu (8%)
  - test/test1/testing (6%)
  - postgres/mysql/oracle (5%)
  - user/usuario (4%)
  - pi (Raspberry Pi default) (3%)
  
  Common passwords attempted:
  - 123456, password, 12345678
  - admin, root, test
  - Password1, P@ssw0rd
  - Keyboard patterns: qwerty, 1qaz2wsx
  - Dates: 2023, 2024, january
  
  Geographic distribution of attacks:
  - China: 35%
  - Russia: 18%
  - Brazil: 12%
  - India: 8%
  - USA: 7% (often compromised servers)
  - Others: 20%`}
              </CodeBlock>
  
              <h3>2. Port Scanning</h3>
              <p>
                Attackers constantly scan for open ports:
              </p>
              <CodeBlock 
                language="bash" 
                filename="port-scanning.sh"
                title="Detecting Port Scans"
              >
  {`# Install port scan detection
  sudo apt install psad
  
  # Check what ports are open
  sudo netstat -tlnp
  
  # Common ports attackers target:
  # 22 (SSH) - Always under attack
  # 3389 (RDP) - Windows Remote Desktop
  # 3306 (MySQL) - Database access
  # 5432 (PostgreSQL) - Database access
  # 6379 (Redis) - Often unsecured
  # 27017 (MongoDB) - Default unsecured
  # 8080, 8081, 8888 - Common web app ports
  
  # See who's scanning you
  sudo tcpdump -i eth0 'tcp[tcpflags] & (tcp-syn) != 0'`}
              </CodeBlock>
  
              <h2 className="blog-post-subtitle">Building My First Line of Defense: Firewalls</h2>
              <p>
                Understanding firewalls was crucial. I learned to use UFW (Uncomplicated Firewall) as my first defense layer:
              </p>
  
              <CodeBlock 
                language="bash" 
                filename="firewall-setup.sh"
                title="Implementing UFW Firewall Rules"
              >
  {`# Basic UFW setup
  sudo apt install ufw
  
  # Default policies: deny all incoming, allow outgoing
  sudo ufw default deny incoming
  sudo ufw default allow outgoing
  
  # Allow SSH (careful - do this before enabling!)
  sudo ufw allow 22/tcp comment 'SSH'
  
  # Allow web traffic
  sudo ufw allow 80/tcp comment 'HTTP'
  sudo ufw allow 443/tcp comment 'HTTPS'
  
  # Allow from specific IP only (my home)
  sudo ufw allow from 192.168.1.100 to any port 22
  
  # Rate limiting for SSH
  sudo ufw limit ssh/tcp comment 'SSH rate limit'
  
  # Enable the firewall
  sudo ufw enable
  
  # Check status
  sudo ufw status verbose
  
  # Advanced: Block specific countries (requires GeoIP)
  # Block IP ranges from specific regions
  sudo ufw deny from 185.234.219.0/24 comment 'Blocked range'
  
  # Application profiles
  sudo ufw app list
  sudo ufw allow 'Nginx Full'
  
  # Logging
  sudo ufw logging on
  sudo ufw logging medium  # low, medium, high, full`}
              </CodeBlock>
  
              <h2 className="blog-post-subtitle">SSH Hardening: Beyond Basic Security</h2>
              <p>
                SSH is often the primary target, so I learned to harden it properly:
              </p>
  
              <CodeBlock 
                language="bash" 
                filename="ssh-hardening.sh"
                title="Comprehensive SSH Security"
              >
  {`# Edit SSH configuration
  sudo nano /etc/ssh/sshd_config
  
  # Essential security settings:
  Port 2222                    # Change from default 22
  PermitRootLogin no          # Never allow root login
  PasswordAuthentication no    # Force key-based auth
  PubkeyAuthentication yes    # Enable public key auth
  MaxAuthTries 3              # Limit login attempts
  MaxSessions 2               # Limit concurrent sessions
  ClientAliveInterval 300     # Disconnect idle sessions
  ClientAliveCountMax 2       # After 10 minutes
  AllowUsers nikolas          # Whitelist specific users
  Protocol 2                  # Use only SSH protocol 2
  
  # Advanced settings:
  StrictModes yes             # Check file permissions
  IgnoreRhosts yes           # Ignore legacy .rhosts
  HostbasedAuthentication no  # Disable host-based auth
  PermitEmptyPasswords no    # Obvious but important
  X11Forwarding no           # Disable unless needed
  PrintLastLog yes           # Show last login info
  
  # Generate strong SSH keys
  ssh-keygen -t ed25519 -a 100 -C "nikolas@secure"
  # -t ed25519: Modern, secure algorithm
  # -a 100: Key derivation rounds (slower = more secure)
  
  # Set up SSH key permissions correctly
  chmod 700 ~/.ssh
  chmod 600 ~/.ssh/authorized_keys
  chmod 600 ~/.ssh/id_ed25519
  chmod 644 ~/.ssh/id_ed25519.pub
  
  # Restart SSH service
  sudo systemctl restart sshd
  
  # Monitor SSH logs
  sudo journalctl -u ssh -f`}
              </CodeBlock>
  
              <h2 className="blog-post-subtitle">Fail2ban: Automated Attack Response</h2>
              <p>
                Manually blocking attackers wasn&apos;t scalable. Fail2ban automates this process:
              </p>
  
              <CodeBlock 
                language="bash" 
                filename="fail2ban-setup.sh"
                title="Fail2ban Configuration"
              >
  {`# Install Fail2ban
  sudo apt install fail2ban
  
  # Create local configuration
  sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
  
  # Configure SSH protection
  sudo nano /etc/fail2ban/jail.local
  
  [DEFAULT]
  bantime  = 3600     # Ban for 1 hour
  findtime  = 600     # Within 10 minutes
  maxretry = 3        # After 3 attempts
  ignoreip = 127.0.0.1/8 ::1  # Whitelist localhost
  
  [sshd]
  enabled = true
  port = 2222         # My custom SSH port
  filter = sshd
  logpath = /var/log/auth.log
  maxretry = 3
  bantime = 3600
  
  # Custom jail for web apps
  [nginx-limit-req]
  enabled = true
  filter = nginx-limit-req
  action = iptables-multiport[name=ReqLimit, port="http,https"]
  logpath = /var/log/nginx/error.log
  findtime = 600
  maxretry = 10
  bantime = 7200
  
  # Check banned IPs
  sudo fail2ban-client status
  sudo fail2ban-client status sshd
  
  # Unban an IP (if you lock yourself out)
  sudo fail2ban-client unban 192.168.1.100
  
  # Watch it work
  sudo tail -f /var/log/fail2ban.log
  # 2024-03-15 10:23:45 INFO [sshd] Ban 185.234.219.45
  # 2024-03-15 10:24:12 INFO [sshd] Ban 103.145.23.17`}
              </CodeBlock>
  
              <h2 className="blog-post-subtitle">Understanding Encryption: HTTPS and Beyond</h2>
              <p>
                Learning about encryption was crucial for protecting data in transit:
              </p>
  
              <CodeBlock 
                language="bash" 
                filename="encryption-setup.sh"
                title="Implementing HTTPS with Let's Encrypt"
              >
  {`# Install Certbot for Let's Encrypt
  sudo apt install certbot python3-certbot-nginx
  
  # Get SSL certificate
  sudo certbot --nginx -d example.com -d www.example.com
  
  # Auto-renewal
  sudo certbot renew --dry-run
  
  # Check certificate
  echo | openssl s_client -connect example.com:443 2>/dev/null | openssl x509 -noout -dates
  
  # Strong SSL configuration for Nginx
  server {
      listen 443 ssl http2;
      server_name example.com;
  
      # Modern SSL configuration
      ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
      ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
      
      # Strong protocols and ciphers
      ssl_protocols TLSv1.2 TLSv1.3;
      ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384;
      ssl_prefer_server_ciphers off;
      
      # HSTS
      add_header Strict-Transport-Security "max-age=63072000" always;
      
      # Other security headers
      add_header X-Frame-Options "SAMEORIGIN" always;
      add_header X-Content-Type-Options "nosniff" always;
      add_header X-XSS-Protection "1; mode=block" always;
  }
  
  # Test SSL configuration
  curl -I https://example.com
  nmap --script ssl-enum-ciphers -p 443 example.com`}
              </CodeBlock>
  
              <h2 className="blog-post-subtitle">Zero Trust Architecture: Trust Nothing, Verify Everything</h2>
              <p>
                The traditional security model of &quot;hard outer shell, soft inside&quot; doesn&apos;t work anymore. I learned about Zero Trust principles:
              </p>
  
              <CodeBlock 
                language="yaml" 
                filename="zero-trust-principles.yml"
                title="Implementing Zero Trust Concepts"
              >
  {`# Zero Trust Principles:
  # 1. Never trust, always verify
  # 2. Assume breach
  # 3. Verify explicitly
  # 4. Use least privilege access
  
  # Example: Service Authentication
  version: '3.8'
  
  services:
    api:
      image: myapi:latest
      networks:
        - internal
      environment:
        # Service-to-service authentication
        - SERVICE_TOKEN=\${API_SERVICE_TOKEN}
        - VERIFY_TOKENS=true
        - ALLOWED_ORIGINS=https://app.example.com
      secrets:
        - api_key
      deploy:
        labels:
          - "traefik.http.middlewares.api-auth.basicauth.users=\${API_USERS}"
          - "traefik.http.routers.api.middlewares=api-auth,rate-limit"
  
    database:
      image: postgres:15
      networks:
        - internal
      environment:
        # Network isolation - only API can connect
        - POSTGRES_HOST_AUTH_METHOD=scram-sha-256
        - POSTGRES_INITDB_ARGS=--auth-host=scram-sha-256
      command: >
        postgres
        -c ssl=on
        -c ssl_cert_file=/var/lib/postgresql/server.crt
        -c ssl_key_file=/var/lib/postgresql/server.key
  
  networks:
    internal:
      internal: true  # No external access`}
              </CodeBlock>
  
              <h2 className="blog-post-subtitle">Network Segmentation: Isolation as Security</h2>
              <p>
                I learned to segment my network to limit damage from potential breaches:
              </p>
  
              <CodeBlock 
                language="bash" 
                filename="network-segmentation.sh"
                title="Network Isolation Strategies"
              >
  {`# Docker network segmentation
  docker network create --internal database-net
  docker network create --internal backend-net
  docker network create frontend-net
  
  # Only frontend can reach internet
  docker run -d --name web --network frontend-net nginx
  docker run -d --name api --network backend-net myapi
  docker run -d --name db --network database-net postgres
  
  # Connect API to both backend and database networks
  docker network connect database-net api
  
  # VPN-only access to sensitive services
  # iptables rules to restrict access
  sudo iptables -A INPUT -p tcp --dport 5432 -s 10.8.0.0/24 -j ACCEPT
  sudo iptables -A INPUT -p tcp --dport 5432 -j DROP
  
  # VLAN setup for physical network segmentation
  # Guest network: 192.168.10.0/24 - Internet only
  # IoT network: 192.168.20.0/24 - Isolated
  # Management: 192.168.30.0/24 - Admin only
  # Servers: 192.168.40.0/24 - Production`}
              </CodeBlock>
  
              <h2 className="blog-post-subtitle">Monitoring and Intrusion Detection</h2>
              <p>
                Security isn&apos;t just about prevention—it&apos;s about detection and response:
              </p>
  
              <CodeBlock 
                language="bash" 
                filename="security-monitoring.sh"
                title="Security Monitoring Setup"
              >
  {`# Install AIDE (Advanced Intrusion Detection Environment)
  sudo apt install aide
  
  # Initialize AIDE database
  sudo aideinit
  sudo mv /var/lib/aide/aide.db.new /var/lib/aide/aide.db
  
  # Check for changes
  sudo aide --check
  
  # Automated checks via cron
  echo "0 3 * * * root /usr/bin/aide --check | mail -s 'AIDE Report' admin@example.com" >> /etc/crontab
  
  # Log monitoring with Logwatch
  sudo apt install logwatch
  sudo logwatch --detail high --service all --range today
  
  # Real-time monitoring script
  #!/bin/bash
  # Monitor critical files
  inotifywait -m -r \
    -e modify,create,delete,move \
    /etc /var/www /home \
    --format '%w%f %e %T' \
    --timefmt '%Y-%m-%d %H:%M:%S' \
    >> /var/log/file-changes.log
  
  # Network monitoring
  sudo apt install iftop nethogs
  sudo iftop -i eth0  # Real-time bandwidth
  sudo nethogs        # Per-process network usage
  
  # Security scanning
  sudo apt install rkhunter
  sudo rkhunter --check --skip-keypress
  
  # Check for rootkits
  sudo apt install chkrootkit
  sudo chkrootkit`}
              </CodeBlock>
  
              <h2 className="blog-post-subtitle">Security Automation: Making Good Practices Default</h2>
              <p>
                I automated security tasks to ensure they actually happen:
              </p>
  
              <CodeBlock 
                language="bash" 
                filename="security-automation.sh"
                title="Automated Security Scripts"
              >
  {`#!/bin/bash
  # Daily security audit script
  
  echo "=== Security Audit $(date) ===" > /var/log/security-audit.log
  
  # Check for security updates
  echo "Checking for security updates..." >> /var/log/security-audit.log
  apt list --upgradable 2>/dev/null | grep -i security >> /var/log/security-audit.log
  
  # Check for failed login attempts
  echo -e "\nFailed login attempts:" >> /var/log/security-audit.log
  grep "Failed password" /var/log/auth.log | tail -20 >> /var/log/security-audit.log
  
  # Check open ports
  echo -e "\nOpen ports:" >> /var/log/security-audit.log
  netstat -tlnp >> /var/log/security-audit.log
  
  # Check for unusual processes
  echo -e "\nHigh CPU processes:" >> /var/log/security-audit.log
  ps aux --sort=-%cpu | head -10 >> /var/log/security-audit.log
  
  # Check disk usage
  echo -e "\nDisk usage:" >> /var/log/security-audit.log
  df -h >> /var/log/security-audit.log
  
  # Check for large files (potential data exfiltration)
  echo -e "\nLarge files created in last 24h:" >> /var/log/security-audit.log
  find / -type f -size +100M -mtime -1 2>/dev/null >> /var/log/security-audit.log
  
  # Email the report
  mail -s "Daily Security Audit" admin@example.com < /var/log/security-audit.log
  
  # Automated patching (careful with this!)
  #!/bin/bash
  # Auto-update security patches only
  apt update
  apt upgrade -y -o Dpkg::Options::="--force-confdef" -o Dpkg::Options::="--force-confold" \
    $(apt list --upgradable 2>/dev/null | grep -i security | cut -d'/' -f1)`}
              </CodeBlock>
  
              <h2 className="blog-post-subtitle">Incident Response: When Things Go Wrong</h2>
              <p>
                Despite best efforts, I learned to prepare for breaches:
              </p>
  
              <CodeBlock 
                language="bash" 
                filename="incident-response.sh"
                title="Incident Response Playbook"
              >
  {`# STEP 1: Isolate the threat
  # Disconnect from network if necessary
  sudo ifconfig eth0 down
  
  # Block attacker IP immediately
  sudo iptables -I INPUT -s ATTACKER_IP -j DROP
  
  # STEP 2: Assess the damage
  # Check recent commands
  history | tail -50
  sudo grep -i 'command' /var/log/auth.log
  
  # Check for new users
  cat /etc/passwd | grep -v '^#' | cut -d: -f1,3,4 | grep -E ':[0-9]{4}:'
  
  # Check for unauthorized SSH keys
  find /home -name authorized_keys -exec cat {} \;
  
  # Check for modified files
  find /etc -type f -mtime -1 -ls
  find /var/www -type f -mtime -1 -ls
  
  # STEP 3: Preserve evidence
  # Create forensic image
  dd if=/dev/sda of=/backup/forensic-image.img bs=4M
  
  # Save logs
  tar -czf /backup/logs-$(date +%Y%m%d).tar.gz /var/log/
  
  # STEP 4: Clean and restore
  # Restore from known good backup
  # Reinstall compromised packages
  # Change all passwords and keys
  # Apply all security updates
  
  # STEP 5: Learn and improve
  # Document what happened
  # Update security procedures
  # Implement additional monitoring`}
              </CodeBlock>
  
              <h2 className="blog-post-subtitle">Best Practices I&apos;ve Adopted</h2>
              <p>
                Through trial, error, and a few close calls, I&apos;ve developed these security habits:
              </p>
              <ul>
                <li><strong>Principle of Least Privilege</strong>: Give minimum necessary permissions</li>
                <li><strong>Defense in Depth</strong>: Multiple layers of security</li>
                <li><strong>Regular Updates</strong>: Patch Tuesday is every Tuesday for me</li>
                <li><strong>Backup Before Changes</strong>: Always have a rollback plan</li>
                <li><strong>Monitor Everything</strong>: You can&apos;t secure what you can&apos;t see</li>
                <li><strong>Automate Security</strong>: Humans forget, scripts don&apos;t</li>
                <li><strong>Assume Breach</strong>: Design systems to limit damage</li>
                <li><strong>Document Everything</strong>: Future you will thank present you</li>
              </ul>
  
              <h2 className="blog-post-subtitle">Resources That Helped Me</h2>
              <p>
                Security is a vast field. These resources helped me build a solid foundation:
              </p>
              <ul>
                <li><strong>OWASP</strong>: Web application security best practices</li>
                <li><strong>CIS Benchmarks</strong>: Hardening guides for various systems</li>
                <li><strong>NIST Cybersecurity Framework</strong>: Comprehensive security approach</li>
                <li><strong>r/netsec</strong>: Reddit community for security news</li>
                <li><strong>HackerOne Reports</strong>: Learn from real vulnerability disclosures</li>
                <li><strong>SecurityFocused Podcasts</strong>: Darknet Diaries, Security Now</li>
              </ul>
  
              <h2 className="blog-post-subtitle">The Security Mindset</h2>
              <p>
                The biggest change wasn&apos;t technical—it was mental. I now think like an attacker when building systems. Every feature is a potential vulnerability. Every convenience is a security trade-off. This paranoia might seem excessive, but in the hostile environment of the internet, it&apos;s necessary for survival.
              </p>
              <p>
                Security isn&apos;t a destination; it&apos;s a journey. New vulnerabilities are discovered daily, attack techniques evolve, and the threat landscape constantly shifts. But with solid fundamentals, continuous learning, and healthy paranoia, we can build systems that are resilient against most threats.
              </p>
  
              <blockquote className="blog-post-quote">
                &quot;Security is not about making systems impenetrable—that&apos;s impossible. It&apos;s about making attacks so difficult, time-consuming, and noisy that attackers move on to easier targets. Every security measure is a speed bump, and enough speed bumps make the journey not worth taking.&quot;
              </blockquote>
            </div>
          </article>
  
          <BlogComments />
          
        </Container>
  
        <Footer />
      </main>
    );
  }