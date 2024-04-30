## day-1
  ## Architecture
  1. monolathic architecture
  2. 2 tier
  3. n tier (we are use this architecture)
  4. modulear monolithic (also we are use this architecture)
  5. microservice
  6. Event Driven
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
  1. efficiency
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

  2. concurrency
    # reduce response time on a concurrent request
      1. hardware(must have concurrency support - multiple core)
      2. software(we need to code our software that can utilize multiple core)
        a. queuing(this queue is not going to block requests)
        b. coherence(being logical)
  3. capacity
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

