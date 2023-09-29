dig www.bhagyashree.net +nostats +nocomments +nocmd
[200~USER root
RUN sudo apt-get -q update &&     sudo apt-get install -yq dnsutils &&     sudo rm -rf /var/lib/apt/lists/*
