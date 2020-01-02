FROM node:8

MAINTAINER Hovig Ohannessian <hovigg@hotmail.com>

# Update and install packages
RUN apt-get update && apt-get install -y \
    bash apt-utils \
    build-essential \
    git \
    python-dev \
    python-pip \
    && apt-get clean

# Create app directory
RUN mkdir -p /usr/src/exec
WORKDIR /usr/src/exec/

# Install app python dependencies
COPY requirements.txt ./
RUN pip install -r requirements.txt && find . -name '*.pyc' -delete

# Copy application files
COPY . .

# Collect static files, also makes log folder
COPY *.py .

RUN python *.py
