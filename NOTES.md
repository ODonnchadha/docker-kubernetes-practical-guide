## Docker & Kubernetes: The Practical Guide.
- Learn Docker, Docker Compose, Multi-Container Projects, Deployment and all about Kubernetes from the ground up! [Udemy Course](https://www.udemy.com/course/docker-kubernetes-the-practical-guide/).

- GETTING STARTED:
    1. Docker: A container technology. Creating and managing containers technology.
        - Container: Standardized unit of software. A package of code and dependencies that support said code.
        - The same container always yields the exact same application and execution behavior regardless of where or by whom. e.g.: a picnic basket.
        - Container support is now build straight into modern opperating systems.
    2. Why?: Independent, standardized "application packages."
        - Different development & production environments. e.g.: node.js version and the "await" command: SyntaxError: Unexpected reserved word.
        - Different development environments within a team/company.
        - Avaoid clashing tools/versions between different projects. Avoid uninstall/reinstall. Nothing is global.
    3. Virtual machines versus Docker:
        - Host operating machine with virtul machine sitting on top of it. Emulated. Encapsulated.
        - PROs: Virtual O/S creates overhead. Wasted space/resources. Seperated environments. Environment-specific configuration. Share and reproduce.
        - CONs: Redundant duplication/waste of space. Slow performance with long boot times. Reproducing is possible but tricky. No shared configuration. Deployments need to be configured manually.
        - Docker has built-in O/S emulated container support. Docker engine spins up containers. Small O/S layer. Shared configuration file. Or built into a (shared) image.
    4. Setup: Overview:
        - Requirements met: Install Docker desktop. Requirements not met: Install Docker toolbox. (Linux is native.)
        - Installing Docker on Windows: NOTE: PowerShell is a default tool that ships with Windows administration.
        - Microsoft Windows 10 Pro|Enterprise|Education. (NOTE: Beware Windows 10 Home. There are additional steps.)
        - [Enable Hyper-V](https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v#:~:text=Enable%20the%20Hyper-V%20role%20through%20Settings%20%201,4%20Select%20Hyper-V%20and%20click%20OK.%20See%20More)
        ```powershell
            Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All
            Enable-WindowsOptionalFeature -Online -FeatureName containers -All
        ```
        - [Install Docker Desktop on Windows](https://docs.docker.com/docker-for-windows/install/)
        ```javascript
            docker -v
        ```
    5. Docker Tool & Building Blocks.
        - Docker Engine. Docker Desktop: Daemon & CLI. Docker Hub: (Service that allows us to host our images.) Docker Compose. Kubernetes.
    6. Installing & Configuring IDE:
        - Base image: FROM node:14
        - Directory: WORKDIR /app
        - Expose this port to the outside world: EXPOSE 3000
        - Execute the following: CMD [ "node", "app.mjs" ]
        ```javascript
            docker run -p 3000:3000 07f6a98f1b0f 
            docker ps
            docker stop priceless_engelbart
        ```
    7. Course outline:
        - Foundation. Data & volumes. COntgainers & networking.
        - Real life: Multi-container projects. Unsing Docker compose. Utility containers. Deploying Docker containers.
        - Kubernetes: Introduction & basics. Data & valumes. Networking. Deployment.

- DOCKER IMAGES & CONTAINERS:
    1. Images versus containers.
        - Docker -> containers. The running unit of software.
        - Docker -> images. The templates/blueprints for containers. The image contains the code/tools to execute. Container to run/execute the code.
        - An image can be used to create multiple containers. NOTE: We run containers which are based on images.
    2. Images:
        - Use an existing, pre-built images. [Docker Hub](https://hub.docker.com/).
        ```javascript
            docker run node
            docker ps -a
            docker run -it node
        ```
        - Use the interactive terminal. We are now interacting with the container. 
        - NOTE: Run command creates an instance of the image. Multiple terminals create multiple instances.
        ```javascript
            docker run -it node
        ```
        - Install the Docker extension via VSCode.
        - FROM instruction. We'll use node since it exists on Docker hub. "In my own image, pull in *this* image."
        - COPY . . First dot, outside of the container. Denotes all files in the folder. 
        - Second dot, where in the image. Try not to use the root. Use a subfolder.
        - RUN a command within the image. This executes with each image build.
        - WORKDIR Tell Docker that all command will be run within this folder.
        - CMD executes when a container is started.
        - Isolated container. EXPOSE is the entery point with container and local machine.
        - Create an image: And look for running processes
        ```javascript
            docker docker build .
            docker ps
        ```
        - Look for all processes: Then assign the internal/external port.
        ```javascript
            docker ps -a
            docker run -p 3003:80 a0da77fb36b8
            docker stop silly_brattain
        ```
    3. Images are read-only. This will always be true. Images are a closed template. Docker will cache with the build files if the file has not changed.
        - COPY package.json /app Cache will ensure that npm install does not run again if the server.js file is modified. Layer architure.
    4. A first summary:
        - Image: Our code and environment by way of detailed Dockerfile instructions. Container template/blueprint.
        - Instantiate multiple containers based upon an image. Stand-alone and independent from other containers that may be running.
    5. Managing images & containers.
        - HINT: Add --help with any Docker command.
        - Stopping & restarting containers
        - All containers: docker ps -a. Running containers: docker -ps
        - docker run will spin up a new container. To restart an existing container: docker start "container id|name"
        - NOTE: docker start will run a container within the background. docker run spin up a container in the foreground. Detached versus attached mode.
        - Attached: listening to the output of *that* container. Detached. And attached midstream:
        ```javascript
            docker run -p 8000:80 -d a0da77fb36b8
            docker attach silly_brattain
            docker logs silly_brattain
        ```
    6. Interactive mode: e.g.: Code that requires keyboard input.
        ```javascript
            FROM python
            WORKDIR /app
            COPY . /app
            CMD ["python", "rng.py"]
        ```
        - After 'docker run,' unable to interact with the container as it is running detached.
        - So we need to interact with out container and create a terminal: (The terminal connects with a container-exposed psyeudo termnal.)
        ```javascript
            docker run -it e65dca5ecb69
            ducker start -a -i heuristic_haslett
        ```
    7. Removing containers and images:
        ```javascript
            docker ps
            docker stop running_container
            ducker rm running_container another_container and_another_container
        ```
        - NOTE: Prune to remove all images.
        ```javascript
            docker images
            docker image prune
            ducker rmi image_id
        ```
        - NOTE: Remove container after run. --rm
        ```javascript
            docker run -p 3000:80 -d --rm container_id
        ```
    8. Behind The Scenes.
        ```javascript
            docker image inspect image_id
        ```
    9. Copy files/folders into/out of a running container. Folder will be created if not exist.
        ```javascript
            docker cp source/. container_name:/destination
        ```
        - We can add without restart and reimage. Or copy out of container. e.g.: log files
        ```javascript
            docker cp source/. container_name:/destination
        ```
    10. Set own name/tag. Used to identify and version. Combined, you will always have a garenteed unique identifier.
        - Name: Define a group of, possible more specialized, images.
        - Tag: Dinfine a specialized image within a group of images.
        ```javascript
            docker run -p 3000:80 -d --rm --name myapp container_id
            docker stop myapp
            docker build -t goals:latest .
        ```
    11. Problem. Create node application image. Node app:
        ```javascript
            FROM node:14
            WORKDIR /app
            COPY package.json .
            RUN npm install
            COPY . .
            EXPOSE 3000
            CMD ["node", "server.js"]
        ```
        ```javascript
            docker build .
            docker images
            docker run -p 8003:3000 --name nodeapp image_id
            docker stop container_name
        ```
        - Python app. Fetches user input:
        ```javascript
            FROM python:3.7
            WORKDIR /app
            COPY . .
            CMD ["python", "bmi.py"]
        ```
        ```javascript
            docker build .
            docker images
            docker run -it --name pythonapp image_id
        ```
        ```javascript
            docker ps -a
            docker start nodeapp
            docker start -i -a pythonapp
            docker stop nodeapp
            docker rm nodeapp pythonapp
            docker ps -a
            docker images
            docker rmi image_id
        ```
        ```javascript
            docker build -t demo1:latest .
            docker images
            docker run -p 8003:3000 -d --name demoapp --rm demo1:latest
        ```
    12. Sharing:
        - Everyone who has an image can create a container based upon that image.
        - Share a finished image. Download and run a container based upon it. No build step is required. This is how we typically share.
        - Or share a docker file. Run docker build. NOTE: The dockerfile instructions might need surrounding files & folders. e.g.: source code.
    13. Pushing to DockerHub:
        - Built-in commands. Two main places where to push: Docker Hub. A Private Registry. The Docker Hub free plan has what we need. Push/Pull.
    14. Summary:
        - All about images. Templates/blueprints for containers. Layers.
        - And containers. Downloaded or created with a Dockerfile and docker build.
        - Multiple layers are optimized to build speed and reusabiliyu.
        - Containers are created with docker run image.

- MANAGING DATA & WORKING WITH VOLUMES:
    - src/real application. Creating/copying local files.
    - Data? Application (code & environment.) Code written by the developer. Once image is built, Fixed. Cannot be changed once the (read-only) image is built.
        - Temporary application data. Fetched/produced in running container. Memory or temporary files. Dynamic and changing. Read/write. Stored in containers, not images.
        - Permanent application data. e.g.: User accounts. Data needs to persist. Read/write data, stored permanent. Stored in containers with help of voulmes.
    ```javascript
        docker build -t feedback-node .
        docker run -p 3000:80 --name feedback-app --rm feedback node
    ```
    - NOTE: Tag with default feedback-node:latest is created.
    - http://localhost:3000/
    - http://localhost:3000/feedback/awesome.txt

    - File is "lost" when container is removed. Not when the container is stopped.
    - File system is inside the container. Container is read-only.
    - File is written to read/write portion of the container. NOT the image. The solution?
    - Introducing VOLUMES. Help with data persistence.
    - Folders on your host machine. Not in the container and not in the image but in your host machine.
    - Mapped to folders inside a Docker container.
    - Volumes are folders on your host machine hard drive which are mounted (mapped) into containers.
    - Volumes persist if a container is shut down. Upon restart and mount, any data inside is available in the container. 
    - Containers can read/write data from a volume.