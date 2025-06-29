## Steps to start the application 

```bash
$ rush update # make sure to use rush and not rushx
$ cd apps/rate-limiter-api # Navigate to project
$ rushx start:dev # make sure to use rushx and not rush
```

## Points to note

- Never use npm commands in the repository. Rush does not encourage it. 
- Always use rush <command> for rush related commands
- Always use rushx for project related command (anything in package.json) [After navigating to correct project]

# Commonly used approaches

# Token Bucket approach
- A token bucket is a container that has pre-defined capacity. Tokens are put in the bucket at preset rates periodically. 
- Once the bucket is full, no more tokens are added. 
- Each request consumes one token. When a request arrives, we check if there are enough
tokens in the bucket
  - If there are enough tokens, we take one token out for each request, and the request
goes through.
  - If there are not enough tokens, the request is dropped.

### Pros:
- The algorithm is easy to implement.
- Memory efficient.
- Token bucket allows a burst of traffic for short periods. A request can go through as long as there are tokens left.
### Cons:
- Two parameters in the algorithm are bucket size and token refill rate. However, it might
be challenging to tune them properly.