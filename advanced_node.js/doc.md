## user stories:
1. repository owner stories
2. user subscription stories
3. feed interaction stories
4. details page story
5. repository analystis storeis
6. user actions and point stories
7. user profile stories
8. search and discovery stories
9. note creation stories
10. notification stories
that mine requirement analytics

Story Book: [web](https://storybook.js.org/)
setup Story book: 

module express.js:
discouse robust application

  project folder architechure:

  root: 
    src:
      libraries:
        log:
        utils:
        db:
      modules: 
        module-1:
        module-2:
      middlewares:
        error handling
        request context
        jwt
    test:
    scripts:
    docker:
      dockerdev.env,
      docker-compose.yml
    docs

## node restful api:
    what is rest?
    expressjs as a rest api framwork
    understanding htttp status code:
      commone categories: 2xx(success), 3xx(Redirection), 4xx(client error), 5xx(server errors)
      Examples: 200 Ok, 201 Created, 400 Bad request, 404 Not Found, 500 Internal server Error
     Http header:
        Metadata about the request and response.
        Common headers: Context-Type, Authorization, Cache-Control
        Custom Header for application-specific details
## mongodb: 
  flexible
  json-like documents
  offers scalability, performance, and flexiblity advantages
## mongooes (and ODM for node.js)
  

## node.js Security best practices: (inportant)
 # keep up to date: 
  maintain the latest, secure version of express.js and all dependencies
 utilize security tools:
  1. snyk or similar services to indetity vulnerablities in you dependencies
  2. security linters sast(Static application Security Testing) tools
 # Secure Connections and Context Protection
   1. https tls: enforce encrypted communication for all production traffic
   2. ssl
   3. helmet:implemnet the helment middleware to set security-focused http headers
   4. CSRF Prevention: Protect against cross-site request forgeries (consider using a dedicated package)
   # input handling for robustness:
    1. input validation: Rigorouly validate all user data on the server-side never trust user input.
    2. sanitization: sanitize untrusted data to prevents injection attacks(xss, code,etc)
    3. Limit Request sizes: Prevent Oversized requests that could overload your server
   # auth fundamnetals:
    1. authentication:
       1. robust password storage using bcrypt(or similar) for hashing
       2. consider json web token(jwt) with package like express-jwt and jwks-rsa
       # authorization: 
        1. enforce a well-defined access contraol system within you application
       # Secure cookies:
        1. use httponly and secure flage for prduction cookies
        2. short session lifrspans
        3. consider a dedicated livrary for setion mangement
  # Vigilance, Error Handling and advanced protections:
    1. logging and monitoriing: implemnet detailsed logging that can be monitored for unusual activity
    2. brute-force protection: Consider rate-limiting packages to mitigate brute-force attacks.
    3. ReDos Awareness: Be cautionus of regular expression susceptble to denial-of-services exploites
    4. Safe Error Handling: leak minimal information in error responses
    5. stay informed: reference OWASP Node.js Checat sheeet and OWASP TO 10 proactively
   
  # Node.js Security and Real-world Threat (Confronting Real-World Threats: Node.js Security and the OWASP Top 10):
    1. OWASP: The Open web Application Security Project, a global non-profit focuses on inproving web security
    2. OWASP top 10 [web](https://owasp.org/www-project-top-ten/): Flagship Owasp Project - a regularly updated list fo then most critical web application security risks
    3. Best Practices vs. Evolving Threats: Security best Practices provides a string foundation , butn attackerts constantly adapt their techniques.
    4. Real-World Focus: then OWASP Top 10 Highlights Vulenerabilitys actively exploited by attackers.
    5. Proactive Deferse: addressing the owasp top 10 proactively strengthens your node.js application against real-world attacks.
   ## A01: Broken Access Control:
    des: failure to enforce proper restrictions on what authricatied uses can do allowing them to acces unauthorized data or function
    Best Practice:
      1. authorization
      2. secure cookies
      3. input validation
  ## A02: Cryptographoc Failures:
     dis: Weak or outdated encryption algorithms, improper key management, and other cryptographic flaws that expose sensitive data,
      Best Practice:
         1. authorizationz(includes robutst password storeage)
         2. https/tls
  ## security configaration:
  ## snyk advisor [web](https://snyk.io/advisor/): this site verify npm pakage
  ## authentication:
    1. jwt
    2. 0auth/0auth2
       1. enables users to grant third-party application access to their data without sharing password.
       2. popular for login mechanisms like "Sign in with google"/"sign in with facebook" (passport.js)
     
 ## .Understanding Commitstreams' GitHub Integration: An OAuth Data Flow Diagram
 ## GitHub OAuth Integration Demystified: A Server-Side Code Walkthrough

## Error Handlling
  # application stablity
    1. crash Prevention
    2. controlled failure
    3. resiliency & uptime
  # user experience
    1. informatiove error message
    2. state preservation
    3. reduced frustraction
  # debugging efficiency
    1. details error logging
    2. understanding error patterns
    3. faster troubleshooting
## error handing best Practices
  # async-await fo rasync error handing
    1. improved code readablity
    2. maintains structure
    3. promotes consistency
  # extend then built-in error object
  # distinguish operational vs programmer error
  # Handle Errors centrally, not Within a middleware

# document api error using openapi or graphql
  # streamlines client intergration
  # Help client-side error handling
  # Enhances api Reliablity
## exit then process gracefully
  # prevents resouce leaks
  # enables authmated restarts
  # Allows External Monitoring

## use a mature logger to increate error bisibility
  # sturctured error reprting
  # flexible outputs
  # debuging & auditing

## test error flows using test framwork
  # verifies error handling logic 
  # prevents resgssions
  # simulates real-world failure
## catch unhandled promise rejections
## validate arguments using a dedicated lobraly

     