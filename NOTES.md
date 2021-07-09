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
        - Microsoft Windows 10 Pro. (NOTE: Windows 10 Home. There are additional steps.)
        - [Enable Hyper-V](https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v#:~:text=Enable%20the%20Hyper-V%20role%20through%20Settings%20%201,4%20Select%20Hyper-V%20and%20click%20OK.%20See%20More)
        ```powershell
            Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All
            Enable-WindowsOptionalFeature -Online -FeatureName containers -All
        ```
