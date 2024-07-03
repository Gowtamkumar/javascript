## day-1

## Architecture

1. monolathic architecture
2. 2 tier
3. n tier (we are use this architecture)
4. modulear monolithic (also we are use this architecture)
5. microservice
6. event Driven
7. cloud native
8. serverless

## day-2

## application perfermance

1. responsiveness
2. stablity
3. scalability
4. resource utilization
5. user expreience

### for a backend app

    ## measure of how fast or responsive a system in under
    1. a given workload
      # backend data
      # request vaolume
    2. a given hardware
      # kind
      # capacity

    3. load testing
    4. benchmarking
    5. log system check

    ## note: every performance problem is then result of some queue building somewhere

    ## where does a queue can build-up? (this is most important for perfarance optimization)
      1. newtork
        # increased latency
        # packet loss
        # full send/receive buffers
      2. database
        # slow query execution
        # database connection pool exhaustion
        # disk i/o bottleneck
      3. application code
        # inefficient algoithom
        # redundant calculations
        # code deadlocks
      4. operating system
        # high cpu utilization
        # excessive memory usage,
        # Long process wait times

    when face the problem? you must sure to know queue.

### what are then root causes?

    1. inefficient slow processing,
      # badly written code
      # external dependencies
    2. serial resources access
      # database access
      # shared files
      # serial executin in code

    3. limited resource capacity
      # memory
      # network bandwidth

# note: we should always try to avoid building queues when designing a new system or find where the is queue building in an existing system

#### performance principles

1.  efficiency

    # reduce response time on a single request

    ## efficient resource utilization(system resources utilization)

        a. io - memory, network, disk
        b. cpu

    ## efficient logic

        a. algorithms
        b. DB Queries

    ## efficient data storeage

        a. data structures
        b. DB Schema

    ## Caching

2.  concurrency

    # reduce response time on a concurrent request

    1. hardware(must have concurrency support - multiple core)
    2. software(we need to code our software that can utilize multiple core)
       a. queuing(this queue is not going to block requests)
       b. coherence(being logical)

3.  capacity

    # increase hardware improve performance

    1. cpu
    2. memory
    3. disk
    4. network

#### System Performance Objective

1. Minimize Req-res latency
   a. latency is measured in time units
   b. Depends on

   1. wait/idle time
   2. processing time

2. maximize throughput
   a. throughput is measured as rate of request processing
   b. depends on
   1. Latency
   2. Capacity

## day 3

## topic application scalability

## current sysytme performance

    1. req-res latency
        a. 150ms per request avg
        b. 250ms tail latency
    2. throughput
        a. 100 concurrenct request per second

## this position need to scale our system

## performance vs scaling

    1. vertical scaling
    2. horizontal scaling

## how to achieve vertical scaling?

## how to achieve horizontal scaling? (this scaling is perfact for application)

    a. lead balancing,
    b. clustering,
    c. containerization
    d. auto-scaling

## what is replication?

## scalability principles

a. decentralization
b. independence

## A. key aspects of decentralization

    1. distribution of components
    2. data distribution
    3. load distribution

## advantages of decentralization

    1. inproved scalablity
    2. fault tolerance
    3. flexiblity

## b. key aspects of independence

    1. loose coupling
    2. isolation of concerns
    3. service-oriented architechture(SOA)

## advantages of independence

    1. easier maintenance
    2. scalablity
    3. parallel development

## load balancer (example: nginx, haproxy)

1. order kore
2. server security
3. balance load
4. manage traffice for web server

## key funcation of load balancers

    a. single ip address
    b. traffice distribution
    c. load distribution
    d. scalablity
    e. health monitoring,
    f. session persistence
    g. ssl termination
    h. content compression
    i. global server load balancing
    j. rate limiting and traffic shaping
    k. redundancy and failover
    l. logging and monitoring
    m. integration with auto-scaling

## use cases of load balancers

    a. web servers and application
    b. application servers in multi-tier architechures
    c. database servers
    d. content delivery networks(CDN)
    e. file servers and storage calusters
    f. mail servers(SMTP, IMAP)
    g. voice over ip(VOIP) server
    h. dns load balancing
    i. streaming services
    j. api gateways
    k. hybrid cloud environment
    l. high-performance computing(HPC) clusters

## Software based load balancer

    1. nginx
    2. haproxy

## reverse proxy as like load balancer moto

reverse proxy always server a thake

## use cases of reverse proxy

    1. web application firewall
    2. content rewriting
    3. authenticaiton and authorization
    4. session management
    5. global server load balancing(GSLB)
    6. logging and monitoring
    7. api gateway
    8. request forading
    9. load distribution
    10. ssl termination
    11. caching
    12. compression
    13. security
    14. web acceleration
    15. ssl offloading

note: load balancing vs reverse proxy?

## api gateway

what is api gateway ?

## features of api gateway

1. request routing
2. authentication and authorization
3. request and response
4. rate limiting and throtling
5. logging and analytics
6. caching
7. security
8. monitoriing and health checks
9. api versioning
10. distributed tracing

## use cases fo api gateway

1. api management
2. security and access control
3. request transformation and composition
4. distributed microservices architecture
5. legacy system integration
6. cross-origin resource sharing(cors)
7. api versioning and evolution
8. ingress controller of kubernetes
9. gRPC integration
10. service mesh integration
11. mobile backend as service(MBaaS)
12. multi-cloud deployment
13. real-time api composition
14. global api access
15. serverless computing integration
16. internet of things(ioT) itegration
17. third-party integration
18. microservices comunication

## popular api gateways

1. kong (remommonded)
2. apache APISIX
3. tyk
4. Ocelot
5. Amazon API Gateway
6. Azure

## day 3.2

## Replication database

# key concept:

    1. data replication
    2. component replication
       1. stateless
       2. statefull
    3. statuful replication database

###### upto discussion you can million million user can handle

## day 4

## microservice architechture

microservice architechture is loose coupliing
all module alada alada application hole microservice
Individual services: ## as you want to create a business 1. R&D 2. manufacturing, 3. packaging, 4. shipping 5. collection payment 6. sale & marketing, 7. customer support 8. technology
how to shift monolithic architechture to microsservice?

1. api gatewaya add.
2. api gate way kaj hole route defient kora
3. every module alala kore fala

## day 5 (system reliablity)

# distributed system

    1. more likely fail
    1. Failure can be
        a. Partial
        b. Independent

# failures in large scale distributed system

    1. definition
    2. charateristics
       1. large number of componets
       2. large number of componet instances

# types of failures

      1. Partial Failures
      2. Independent failures
      3. single point of failures

# challenges in large scale distributed stystem

      1. increased chance of partial failures
      2. cascading effects
      3. indetifying single point of failures
      4. mitigation strategies

## Reliability Engineering (it is very hard)

      1. Reliablity
      2. Abaility
      3. Fault Tolerance
        ## fault tolerance design
          1. Redundancy
          2. Fault Detection
          3. Recovery

## health check

    1. ping base
    2. heartbeat base

## system stablity

    1. timeout
    2. Retries
    3. circuit breaker

## day 6

## application security

# firewall intregation

# network security

# encryption:

    1. symmentric encryption

# ssl

# hash

# digital signature

# digital certificate

# secure network protocol

# VPN

# firewall

# authentication,authorization & RBAC

## day 7

# technology stack discussion

  <!-- own -->

## day 8

## system design interview

    # interview Structure
      1. requirement clarification
         1. functional requirement
         2. non-functional requirement
         3. Extended requirments
      2. Estimation and constrianints
      3. data model design
      4. api design
      5. high level component design
      6. detailed component design
      7. idetify & resolve bottlenecks

## Case Study-1 for system design

## day 9

# twitter social media platform

  ## Requirements:
     functional Requirement:
      1. should be able to post new tweets(can be test, image, video)
      2. should be able to follow other user
      3. shold have a newsfeed feature consistiing of tweets from then people the users is follwing
      4. should be able to search tweets
    # non-functional requiremnt:
      1. hight avabilability with ninimal latency
      2. the system should be scalable and efficent
    # extended requirements
      1. metrices and alalyties
      2. retweet functionality
      3. favorite tweets

## Case Study-1 for system design

    1. estimation & constraints
    2. data model
    3. choesen database
    4. api design
       1. high level design
       2. choose architechture
          1. monolithic
          2. microservice
             # service:
             1. user service
             2. newsfeed service
             3. tweet service
             4. serarch service
             5. media service
             6. notification service
             7. analytices service
       3. detailed design

