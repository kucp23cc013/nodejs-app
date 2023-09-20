**Application run on port: 5000**

1.  kubectl apply -f nodejs-deployment.yaml
2.  kubectl apply -f nodejs-service.yaml
3.  kubectl port-forward service/nodejs-service 5000:5000

API:

- \[GET\] /user
- \[POST\] /user
