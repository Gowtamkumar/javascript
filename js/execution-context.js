// how to run js code
// js and nodejs both is compiled by JIT(JUST-IN-TIME)

// 1. Interpreter
// 2. compolation
// 2. mixture of both

// Interpreter
// 1. process slow
// 1. easy to debug

// 2. compolation
// 1.process fast
// 2. hard to debug and system crash

//  3. just-in-time (JIT) Compiler (mixture of both)

// Execution and context
  // js code jokhon compoiled korer somy small small vag kore fale . ai small small vag bole execution context. 
  //  type of Differentiation
    // ## global excution context
          // 1. loading stage
            // Phase: loading
            // window: global oject
            // this: window
            // topic:undefined // this is variable memory elocate
            // getTopic:fun() this is funciton
            // scope chain
          // 1. Creation stage
              // Phase: creation
              // window: global oject
              // this: window
              // topic:"some text" 
              // getTopic:fun() this is funciton
              // scope chain
    // 2. function excution context
      //  type of Differentiation
        // 1. loading stage
              // Phase: loading
              // arguments: {} // create kore
              // this: window
              // topic:undefined // this is variable memory elocate
              // getTopic:fun() this is funciton
              // scope chain

           // 1. create stage
              // Phase: loading
              // arguments: {}  // create kore
              // this: window
              // topic:"some text" // this is variable memory elocate
              // getTopic:fun() this is funciton
              // scope chain