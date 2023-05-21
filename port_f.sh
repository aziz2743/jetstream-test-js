#!/usr/bin/bash
pod_name=$(kubectl get pods|grep jetstream-depl|awk '{print $1}')

echo "port forwarding $pod_name"

kubectl port-forward  $pod_name 4222:4222
