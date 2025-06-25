export const metadata = {
    title: 'Nikolas Dev Journey | Docker and Self-Hosting: My First Steps',
    description: 'Learning Docker fundamentals and discovering the world of self-hosting, from basic containers to complex multi-service deployments.',
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
              Docker and Self-Hosting: My First Steps
            </h1>
  
            <div className="blog-post-content">
              <p>
                &quot;It works on my machine&quot; – every developer has said this at least once. When I first encountered Docker, I didn&apos;t understand why containerization was such a big deal. Applications are applications, right? Just install them and run them. But as I ventured into self-hosting various services on my VPS, I quickly discovered why Docker has revolutionized how we deploy software. This is my journey from Docker skeptic to container enthusiast.
              </p>
  
              <h2 className="blog-post-subtitle">My Pre-Docker Struggles</h2>
              <p>
                Before Docker, setting up services on my VPS was a nightmare. Here&apos;s what a typical installation looked like:
              </p>
  
              <CodeBlock 
                language="bash" 
                filename="pre-docker-chaos.sh"
                title="The Old Way: Dependency Hell"
              >
  {`# Trying to install a Node.js app
  curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
  sudo apt-get install -y nodejs
  
  # App needs specific Node version... uninstall and try again
  sudo apt-get remove nodejs
  curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
  sudo apt-get install -y nodejs
  
  # Install app dependencies
  npm install
  
  # Error: needs Python 2.7 for node-gyp
  sudo apt-get install python2.7
  
  # Error: needs build tools
  sudo apt-get install build-essential
  
  # Finally runs... but breaks my Python 3 scripts
  # Now I need to manage multiple Python versions
  
  # Install another app that needs Node 18...
  # Everything breaks!`}
              </CodeBlock>
  
              <p>
                Each application had its own requirements, and they often conflicted. I was constantly worried about breaking existing services when installing new ones. Virtual environments helped with Python, but what about system-level dependencies? That&apos;s when I decided to give Docker a serious try.
              </p>
  
              <h2 className="blog-post-subtitle">Docker Basics: Understanding Containers</h2>
              <p>
                The concept that clicked for me was this: Docker containers are like lightweight, portable computers within your computer. Each container has its own filesystem, processes, and network, but shares the host&apos;s kernel. Here&apos;s my first successful Docker experience:
              </p>
  
              <CodeBlock 
                language="bash" 
                filename="first-docker.sh"
                title="My First Docker Container"
              >
  {`# Install Docker
  curl -fsSL https://get.docker.com -o get-docker.sh
  sudo sh get-docker.sh
  
  # Add myself to docker group (avoid sudo)
  sudo usermod -aG docker $USER
  newgrp docker
  
  # Run my first container
  docker run hello-world
  
  # The magic moment - running a web server
  docker run -d -p 8080:80 nginx
  
  # Check if it's running
  docker ps
  CONTAINER ID   IMAGE   COMMAND                  CREATED         STATUS
  a1b2c3d4e5f6   nginx   "/docker-entrypoint.…"   5 seconds ago   Up 4 seconds
  
  # Visit http://localhost:8080 - it works!
  
  # Stop and remove
  docker stop a1b2c3d4e5f6
  docker rm a1b2c3d4e5f6
  
  # Or in one command
  docker rm -f a1b2c3d4e5f6`}
              </CodeBlock>
  
              <p>
                The simplicity was mind-blowing. No installation, no configuration, no dependency conflicts. Just <code>docker run nginx</code> and I had a working web server. But this was just the beginning.
              </p>
  
              <h2 className="blog-post-subtitle">Docker Images vs Containers</h2>
              <p>
                Understanding the difference between images and containers was crucial:
              </p>
              <ul>
                <li><strong>Image</strong>: A blueprint or template (like a class in programming)</li>
                <li><strong>Container</strong>: A running instance of an image (like an object)</li>
              </ul>
  
              <CodeBlock 
                language="bash" 
                filename="images-vs-containers.sh"
                title="Working with Images and Containers"
              >
  {`# List images
  docker images
  
  # Pull an image without running it
  docker pull ubuntu:22.04
  
  # Run a container from an image
  docker run -it ubuntu:22.04 bash
  
  # Inside the container
  root@container:/# apt update
  root@container:/# apt install curl
  root@container:/# exit
  
  # Container stops when we exit
  docker ps -a  # Shows stopped containers
  
  # Create an image from our modified container
  docker commit <container-id> my-ubuntu-with-curl
  
  # Now we can run containers with curl pre-installed
  docker run -it my-ubuntu-with-curl curl --version`}
              </CodeBlock>
  
              <h2 className="blog-post-subtitle">Dockerfile: Automating Image Creation</h2>
              <p>
                Creating images manually with <code>docker commit</code> wasn&apos;t scalable. Dockerfiles changed everything:
              </p>
  
              <CodeBlock 
                language="dockerfile" 
                filename="Dockerfile"
                title="My First Dockerfile"
              >
  {`# Start from a base image
  FROM node:16-alpine
  
  # Set working directory
  WORKDIR /app
  
  # Copy package files
  COPY package*.json ./
  
  # Install dependencies
  RUN npm install
  
  # Copy application code
  COPY . .
  
  # Expose port
  EXPOSE 3000
  
  # Command to run the app
  CMD ["npm", "start"]`}
              </CodeBlock>
  
              <p>
                Building and running this was simple:
              </p>
  
              <CodeBlock 
                language="bash" 
                filename="build-and-run.sh"
                title="Building Custom Images"
              >
  {`# Build the image
  docker build -t my-node-app .
  
  # Run container from our custom image
  docker run -d -p 3000:3000 my-node-app
  
  # View logs
  docker logs <container-id>
  
  # Execute commands in running container
  docker exec -it <container-id> sh`}
              </CodeBlock>
  
              <h2 className="blog-post-subtitle">Docker Compose: Managing Multi-Container Applications</h2>
              <p>
                As I started self-hosting more complex applications, managing individual containers became unwieldy. Docker Compose was the solution:
              </p>
  
              <CodeBlock 
                language="yaml" 
                filename="docker-compose.yml"
                title="My First Docker Compose Setup"
              >
  {`version: '3.8'
  
  services:
    # WordPress site
    wordpress:
      image: wordpress:latest
      ports:
        - "8080:80"
      environment:
        WORDPRESS_DB_HOST: db
        WORDPRESS_DB_USER: wordpress
        WORDPRESS_DB_PASSWORD: secret
        WORDPRESS_DB_NAME: wordpress
      volumes:
        - wordpress_data:/var/www/html
      depends_on:
        - db
      restart: unless-stopped
  
    # MySQL database
    db:
      image: mysql:8.0
      environment:
        MYSQL_DATABASE: wordpress
        MYSQL_USER: wordpress
        MYSQL_PASSWORD: secret
        MYSQL_ROOT_PASSWORD: rootsecret
      volumes:
        - db_data:/var/lib/mysql
      restart: unless-stopped
  
    # phpMyAdmin for database management
    phpmyadmin:
      image: phpmyadmin/phpmyadmin
      ports:
        - "8081:80"
      environment:
        PMA_HOST: db
        PMA_USER: root
        PMA_PASSWORD: rootsecret
      depends_on:
        - db
      restart: unless-stopped
  
  volumes:
    wordpress_data:
    db_data:`}
              </CodeBlock>
  
              <p>
                With one command, I could spin up an entire WordPress stack:
              </p>
  
              <CodeBlock 
                language="bash" 
                filename="compose-commands.sh"
                title="Docker Compose Commands"
              >
  {`# Start all services
  docker-compose up -d
  
  # View logs
  docker-compose logs -f
  
  # Stop all services
  docker-compose down
  
  # Stop and remove volumes (careful!)
  docker-compose down -v
  
  # Update images and restart
  docker-compose pull
  docker-compose up -d
  
  # Scale a service
  docker-compose up -d --scale wordpress=3`}
              </CodeBlock>
  
              <h2 className="blog-post-subtitle">My Self-Hosting Journey</h2>
              <p>
                With Docker knowledge in hand, I embarked on a self-hosting spree. Here are some services I successfully deployed:
              </p>
  
              <h3>1. Nextcloud - Personal Cloud Storage</h3>
              <CodeBlock 
                language="yaml" 
                filename="nextcloud-compose.yml"
                title="Nextcloud with Docker"
              >
  {`version: '3'
  
  services:
    nextcloud:
      image: nextcloud:latest
      ports:
        - 8082:80
      volumes:
        - nextcloud_data:/var/www/html
        - ./data:/var/www/html/data
      environment:
        - MYSQL_PASSWORD=nextcloud
        - MYSQL_DATABASE=nextcloud
        - MYSQL_USER=nextcloud
        - MYSQL_HOST=nextcloud_db
      restart: unless-stopped
  
    nextcloud_db:
      image: mariadb:10.5
      volumes:
        - nextcloud_db:/var/lib/mysql
      environment:
        - MYSQL_ROOT_PASSWORD=rootpassword
        - MYSQL_PASSWORD=nextcloud
        - MYSQL_DATABASE=nextcloud
        - MYSQL_USER=nextcloud
      restart: unless-stopped
  
  volumes:
    nextcloud_data:
    nextcloud_db:`}
              </CodeBlock>
  
              <h3>2. Portainer - Docker Management UI</h3>
              <CodeBlock 
                language="bash" 
                filename="portainer-setup.sh"
                title="Portainer for Easy Docker Management"
              >
  {`# Portainer makes Docker management visual
  docker volume create portainer_data
  
  docker run -d \
    -p 9000:9000 \
    -p 8000:8000 \
    --name portainer \
    --restart=always \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v portainer_data:/data \
    portainer/portainer-ce:latest
  
  # Access at http://localhost:9000
  # Now I can manage containers through a web UI!`}
              </CodeBlock>
  
              <h3>3. GitLab - Self-Hosted Git</h3>
              <CodeBlock 
                language="yaml" 
                filename="gitlab-compose.yml"
                title="GitLab CE with Docker"
              >
  {`version: '3.6'
  
  services:
    gitlab:
      image: gitlab/gitlab-ce:latest
      hostname: 'gitlab.local'
      ports:
        - '8083:80'
        - '8443:443'
        - '2222:22'
      volumes:
        - gitlab_config:/etc/gitlab
        - gitlab_logs:/var/log/gitlab
        - gitlab_data:/var/opt/gitlab
      environment:
        GITLAB_OMNIBUS_CONFIG: |
          external_url 'http://gitlab.local:8083'
          gitlab_rails['gitlab_shell_ssh_port'] = 2222
          # Reduce memory usage for small VPS
          postgresql['shared_buffers'] = "256MB"
          postgresql['max_worker_processes'] = 2
          sidekiq['max_concurrency'] = 9
          prometheus_monitoring['enable'] = false
      restart: unless-stopped
  
  volumes:
    gitlab_config:
    gitlab_logs:
    gitlab_data:`}
              </CodeBlock>
  
              <h2 className="blog-post-subtitle">Docker Networking: Connecting Containers</h2>
              <p>
                Understanding Docker networking was crucial for complex setups:
              </p>
  
              <CodeBlock 
                language="bash" 
                filename="docker-networking.sh"
                title="Docker Networking Concepts"
              >
  {`# Default bridge network
  docker network ls
  
  # Create custom network
  docker network create myapp-network
  
  # Run containers on the same network
  docker run -d --name webapp --network myapp-network nginx
  docker run -d --name database --network myapp-network mysql:8
  
  # Containers can communicate by name
  docker exec webapp ping database
  
  # Inspect network
  docker network inspect myapp-network
  
  # Connect existing container to network
  docker network connect myapp-network existing-container
  
  # Port mapping for external access
  docker run -d -p 8080:80 --name web nginx
  # 8080 = host port, 80 = container port`}
              </CodeBlock>
  
              <h2 className="blog-post-subtitle">Volume Management: Persistent Data</h2>
              <p>
                One of my early mistakes was not understanding volumes, leading to data loss when I removed containers:
              </p>
  
              <CodeBlock 
                language="bash" 
                filename="docker-volumes.sh"
                title="Managing Persistent Data"
              >
  {`# Named volumes (preferred)
  docker volume create myapp_data
  docker run -v myapp_data:/app/data myapp
  
  # Bind mounts (for development)
  docker run -v $(pwd)/src:/app/src myapp
  
  # Anonymous volumes (avoid these)
  docker run -v /app/data myapp
  
  # List volumes
  docker volume ls
  
  # Inspect volume
  docker volume inspect myapp_data
  
  # Clean up unused volumes
  docker volume prune
  
  # Backup a volume
  docker run --rm \
    -v myapp_data:/source \
    -v $(pwd):/backup \
    alpine tar -czf /backup/myapp_backup.tar.gz -C /source .
  
  # Restore a volume
  docker run --rm \
    -v myapp_data:/target \
    -v $(pwd):/backup \
    alpine tar -xzf /backup/myapp_backup.tar.gz -C /target`}
              </CodeBlock>
  
              <h2 className="blog-post-subtitle">Resource Management: Not Crashing My VPS</h2>
              <p>
                With limited VPS resources (2GB RAM), I learned to constrain containers:
              </p>
  
              <CodeBlock 
                language="yaml" 
                filename="resource-limits.yml"
                title="Docker Resource Limits"
              >
  {`version: '3.8'
  
  services:
    app:
      image: myapp:latest
      deploy:
        resources:
          limits:
            cpus: '0.5'      # Half a CPU
            memory: 512M     # 512 MB RAM
          reservations:
            cpus: '0.25'
            memory: 256M
      restart: unless-stopped
  
    # For docker run
    # docker run -d \
    #   --memory="512m" \
    #   --cpus="0.5" \
    #   --restart=unless-stopped \
    #   myapp:latest`}
              </CodeBlock>
  
              <h2 className="blog-post-subtitle">Security Considerations</h2>
              <p>
                As I deployed more services, security became paramount:
              </p>
  
              <CodeBlock 
                language="bash" 
                filename="docker-security.sh"
                title="Docker Security Best Practices"
              >
  {`# Don't run containers as root
  # In Dockerfile:
  USER node
  
  # Use specific image versions (not :latest in production)
  FROM node:16.20.0-alpine
  
  # Scan images for vulnerabilities
  docker scan myapp:latest
  
  # Use secrets for sensitive data
  docker secret create db_password ./password.txt
  docker service create \
    --secret db_password \
    --env DB_PASSWORD_FILE=/run/secrets/db_password \
    myapp
  
  # Network isolation
  docker network create frontend
  docker network create backend
  # Only connect containers that need to communicate
  
  # Read-only containers where possible
  docker run --read-only \
    --tmpfs /tmp \
    --tmpfs /run \
    myapp
  
  # Limit capabilities
  docker run --cap-drop=ALL --cap-add=NET_BIND_SERVICE myapp`}
              </CodeBlock>
  
              <h2 className="blog-post-subtitle">My Docker Workflow Evolution</h2>
              <p>
                Over time, I developed a workflow for deploying new services:
              </p>
  
              <CodeBlock 
                language="yaml" 
                filename="deployment-template.yml"
                title="My Standard Deployment Template"
              >
  {`version: '3.8'
  
  services:
    app:
      image: \${APP_IMAGE:-myapp:latest}
      container_name: \${APP_NAME:-myapp}
      restart: unless-stopped
      networks:
        - internal
        - proxy
      volumes:
        - app_data:/data
        - ./config:/config:ro
      environment:
        - NODE_ENV=production
        - DB_HOST=database
      env_file:
        - .env
      labels:
        - "traefik.enable=true"
        - "traefik.http.routers.\${APP_NAME}.rule=Host(\\\`\${APP_DOMAIN}\\\`)"
        - "traefik.http.routers.\${APP_NAME}.tls=true"
        - "traefik.http.routers.\${APP_NAME}.tls.certresolver=letsencrypt"
      healthcheck:
        test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
        interval: 30s
        timeout: 10s
        retries: 3
      logging:
        driver: "json-file"
        options:
          max-size: "10m"
          max-file: "3"
      depends_on:
        - database
  
    database:
      image: postgres:15-alpine
      restart: unless-stopped
      networks:
        - internal
      volumes:
        - db_data:/var/lib/postgresql/data
      environment:
        - POSTGRES_DB=\${DB_NAME}
        - POSTGRES_USER=\${DB_USER}
        - POSTGRES_PASSWORD=\${DB_PASSWORD}
  
  networks:
    internal:
      internal: true
    proxy:
      external: true
  
  volumes:
    app_data:
    db_data:`}
              </CodeBlock>
  
              <h2 className="blog-post-subtitle">Debugging Docker Issues</h2>
              <p>
                Learning to debug containerized applications was essential:
              </p>
  
              <CodeBlock 
                language="bash" 
                filename="docker-debugging.sh"
                title="Docker Debugging Techniques"
              >
  {`# View logs
  docker logs -f container_name
  docker-compose logs -f service_name
  
  # Execute commands in running container
  docker exec -it container_name sh
  docker exec container_name ps aux
  
  # Debug failed containers
  docker run -it --entrypoint sh image_name
  
  # Inspect container details
  docker inspect container_name
  
  # Check resource usage
  docker stats
  
  # Debug networking
  docker exec container_name ping other_container
  docker exec container_name nslookup google.com
  docker port container_name
  
  # Copy files from container
  docker cp container_name:/path/to/file ./local_file
  
  # Debug build issues
  docker build --no-cache -t myapp .
  docker build --progress=plain -t myapp .
  
  # Clean up everything and start fresh
  docker-compose down -v
  docker system prune -a --volumes`}
              </CodeBlock>
  
              <h2 className="blog-post-subtitle">Lessons Learned</h2>
              <p>
                My Docker journey taught me valuable lessons:
              </p>
              <ul>
                <li><strong>Start simple</strong>: Don&apos;t try to containerize everything at once</li>
                <li><strong>Use official images</strong>: They&apos;re usually well-maintained and documented</li>
                <li><strong>Pin versions</strong>: Never use :latest in production</li>
                <li><strong>One process per container</strong>: Follow the Unix philosophy</li>
                <li><strong>Logs to stdout</strong>: Let Docker handle log management</li>
                <li><strong>Health checks are crucial</strong>: They prevent cascading failures</li>
                <li><strong>Backup volumes</strong>: Containers are ephemeral, data isn&apos;t</li>
                <li><strong>Monitor resources</strong>: Containers can consume more than expected</li>
              </ul>
  
              <h2 className="blog-post-subtitle">My Current Self-Hosted Stack</h2>
              <p>
                Today, my VPS runs a carefully curated stack of services:
              </p>
              <ul>
                <li><strong>Traefik</strong>: Reverse proxy with automatic SSL</li>
                <li><strong>Portainer</strong>: Docker management UI</li>
                <li><strong>Nextcloud</strong>: Personal cloud storage</li>
                <li><strong>Vaultwarden</strong>: Password manager (Bitwarden compatible)</li>
                <li><strong>Uptime Kuma</strong>: Service monitoring</li>
                <li><strong>Grafana + Prometheus</strong>: Metrics and dashboards</li>
                <li><strong>GitLab CE</strong>: Code repository and CI/CD</li>
                <li><strong>PostgreSQL</strong>: Database for various services</li>
                <li><strong>Redis</strong>: Caching and session storage</li>
              </ul>
  
              <h2 className="blog-post-subtitle">Dockerizing Network Services</h2>
              <p>
                One of my most interesting Docker projects was containerizing various networking tools and VPN-related services. This taught me a lot about Docker networking and security.
              </p>
  
              <h3>Running Headscale in Docker</h3>
              <CodeBlock 
                language="yaml" 
                filename="headscale-docker.yml"
                title="Headscale with Docker Compose"
              >
  {`version: '3.8'
  
  services:
    headscale:
      image: headscale/headscale:latest
      container_name: headscale
      volumes:
        - ./config:/etc/headscale
        - headscale_data:/var/lib/headscale
      ports:
        - "8085:8080"
      environment:
        - TZ=Europe/Berlin
      command: headscale serve
      restart: unless-stopped
      networks:
        - headscale_net
  
    # Headscale UI (unofficial but helpful)
    headscale-ui:
      image: ghcr.io/gurucomputing/headscale-ui:latest
      container_name: headscale-ui
      ports:
        - "8086:80"
      environment:
        - HEADSCALE_URL=http://headscale:8080
      depends_on:
        - headscale
      restart: unless-stopped
      networks:
        - headscale_net
  
    # PostgreSQL for Headscale (better than SQLite)
    postgres:
      image: postgres:15-alpine
      container_name: headscale_db
      environment:
        - POSTGRES_USER=headscale
        - POSTGRES_PASSWORD=secure_password
        - POSTGRES_DB=headscale
      volumes:
        - postgres_data:/var/lib/postgresql/data
      restart: unless-stopped
      networks:
        - headscale_net
  
  networks:
    headscale_net:
      driver: bridge
  
  volumes:
    headscale_data:
    postgres_data:`}
              </CodeBlock>
  
              <h3>Docker Network Isolation for Security</h3>
              <p>
                I learned to use Docker networks to isolate services properly:
              </p>
  
              <CodeBlock 
                language="bash" 
                filename="docker-network-security.sh"
                title="Secure Docker Networking"
              >
  {`# Create isolated networks
  docker network create --internal database_net
  docker network create public_net
  docker network create management_net
  
  # Run services with proper isolation
  # Database - internal only
  docker run -d \
    --name postgres \
    --network database_net \
    postgres:15
  
  # API service - can reach database and public
  docker run -d \
    --name api \
    --network public_net \
    myapi:latest
  
  # Connect API to database network
  docker network connect database_net api
  
  # Management tools - separate network
  docker run -d \
    --name portainer \
    --network management_net \
    -v /var/run/docker.sock:/var/run/docker.sock \
    portainer/portainer-ce
  
  # Inspect network connections
  docker network inspect database_net
  docker port api
  
  # Security: Database has no public exposure!`}
              </CodeBlock>
  
              <h3>Challenges with Containerized Network Services</h3>
              <p>
                Running network services in Docker brought unique challenges:
              </p>
  
              <CodeBlock 
                language="yaml" 
                filename="network-services-challenges.yml"
                title="Network Services Docker Challenges"
              >
  {`# Problem 1: UDP services (like WireGuard)
  # Docker's NAT can interfere with UDP
  wireguard:
    image: linuxserver/wireguard
    cap_add:
      - NET_ADMIN
      - SYS_MODULE
    environment:
      - PUID=1000
      - PGID=1000
    volumes:
      - ./config:/config
      - /lib/modules:/lib/modules:ro
    ports:
      - "51820:51820/udp"  # UDP port mapping
    sysctls:
      - net.ipv4.conf.all.src_valid_mark=1
      - net.ipv4.ip_forward=1
    restart: unless-stopped
  
  # Problem 2: Container needs host networking
  # Some services need direct network access
  derp_server:
    image: tailscale/derper
    network_mode: host  # Full host network access
    environment:
      - DERPER_HOSTNAME=derp.example.com
      - DERPER_VERIFY_CLIENTS=true
    volumes:
      - ./certs:/certs:ro
    restart: unless-stopped
  
  # Problem 3: Privileged containers
  # Network tools often need elevated privileges
  network_monitor:
    image: netdata/netdata
    cap_add:
      - SYS_PTRACE
    security_opt:
      - apparmor:unconfined
    volumes:
      - /proc:/host/proc:ro
      - /sys:/host/sys:ro
      - /var/run/docker.sock:/var/run/docker.sock:ro`}
              </CodeBlock>
  
              <h3>My Network Services Stack</h3>
              <p>
                Here&apos;s the complete network services stack I ended up running:
              </p>
  
              <CodeBlock 
                language="yaml" 
                filename="network-stack.yml"
                title="Complete Network Services Stack"
              >
  {`version: '3.8'
  
  services:
    # Traefik - Reverse proxy with automatic SSL
    traefik:
      image: traefik:v2.10
      container_name: traefik
      security_opt:
        - no-new-privileges:true
      ports:
        - "80:80"
        - "443:443"
        - "8080:8080"  # Dashboard
      volumes:
        - ./traefik.yml:/traefik.yml:ro
        - ./acme.json:/acme.json
        - /var/run/docker.sock:/var/run/docker.sock:ro
      labels:
        - "traefik.enable=true"
        - "traefik.http.routers.dashboard.rule=Host(\`traefik.local\`)"
        - "traefik.http.routers.dashboard.service=api@internal"
      restart: unless-stopped
  
    # Pi-hole - Network-wide ad blocking
    pihole:
      image: pihole/pihole:latest
      container_name: pihole
      hostname: pihole
      ports:
        - "53:53/tcp"
        - "53:53/udp"
        - "8081:80/tcp"
      environment:
        - TZ=Europe/Berlin
        - WEBPASSWORD=secure_password
        - PIHOLE_DNS_=1.1.1.1;1.0.0.1
      volumes:
        - pihole_data:/etc/pihole
        - dnsmasq_data:/etc/dnsmasq.d
      cap_add:
        - NET_ADMIN
      restart: unless-stopped
  
    # WireGuard - VPN server
    wireguard:
      image: linuxserver/wireguard
      container_name: wireguard
      cap_add:
        - NET_ADMIN
        - SYS_MODULE
      environment:
        - PUID=1000
        - PGID=1000
        - TZ=Europe/Berlin
        - SERVERURL=vpn.example.com
        - SERVERPORT=51820
        - PEERS=laptop,phone,tablet
        - PEERDNS=auto
      volumes:
        - wireguard_data:/config
        - /lib/modules:/lib/modules:ro
      ports:
        - "51820:51820/udp"
      sysctls:
        - net.ipv4.conf.all.src_valid_mark=1
        - net.ipv4.ip_forward=1
      restart: unless-stopped
  
    # Nginx Proxy Manager - Easy reverse proxy
    nginx-proxy-manager:
      image: jc21/nginx-proxy-manager:latest
      container_name: nginx_proxy_manager
      ports:
        - "8082:80"
        - "8443:443"
        - "8083:81"  # Admin interface
      volumes:
        - npm_data:/data
        - npm_letsencrypt:/etc/letsencrypt
      restart: unless-stopped
  
  volumes:
    pihole_data:
    dnsmasq_data:
    wireguard_data:
    npm_data:
    npm_letsencrypt:`}
              </CodeBlock>
  
              <h3>Monitoring Containerized Services</h3>
              <p>
                Monitoring became crucial with so many services:
              </p>
  
              <CodeBlock 
                language="yaml" 
                filename="monitoring-stack.yml"
                title="Monitoring Docker Services"
              >
  {`# Monitoring stack
  monitoring:
    prometheus:
      image: prom/prometheus:latest
      volumes:
        - ./prometheus.yml:/etc/prometheus/prometheus.yml
        - prometheus_data:/prometheus
      command:
        - '--config.file=/etc/prometheus/prometheus.yml'
        - '--storage.tsdb.path=/prometheus'
      ports:
        - "9090:9090"
      restart: unless-stopped
  
    grafana:
      image: grafana/grafana:latest
      volumes:
        - grafana_data:/var/lib/grafana
      environment:
        - GF_SECURITY_ADMIN_PASSWORD=admin
        - GF_USERS_ALLOW_SIGN_UP=false
      ports:
        - "3000:3000"
      restart: unless-stopped
  
    # Docker metrics exporter
    cadvisor:
      image: gcr.io/cadvisor/cadvisor:latest
      volumes:
        - /:/rootfs:ro
        - /var/run:/var/run:ro
        - /sys:/sys:ro
        - /var/lib/docker/:/var/lib/docker:ro
      ports:
        - "8084:8080"
      restart: unless-stopped
  
  # Uptime monitoring
  uptime-kuma:
    image: louislam/uptime-kuma:latest
    volumes:
      - uptime_data:/app/data
    ports:
      - "3001:3001"
    restart: unless-stopped`}
              </CodeBlock>
            </div>
          </article>
  
          <BlogComments />
          
        </Container>
  
        <Footer />
      </main>
    );
  }