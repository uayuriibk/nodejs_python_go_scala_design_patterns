# nodejs_patterns
node.js, JavaScript, design patterns etc


Design pattern 
   - Definition


Creational Patterns
   - Singleton pattern
   - Constructor pattern
   - Class pattern
   - Factory pattern
   - Abstract factory pattern

Structural Patterns
  - Module pattern
  - Mixins pattern
  - Facade pattern
  - Flyweight pattern
  - Decorator pattern
  - MVC pattern
  - MVP (Model-View-Presenter) pattern
  - MVVM (Model-View-ViewModel) pattern

Behavioral Patterns
  - Observer pattern
  - State pattern
  - Chain of responsibility pattern
  - Iterator pattern
  - Strategy pattern
  - Memento pattern
  - Mediator pattern
  - Command pattern

====================================================================================================

Design Pattern - a general, reusable solution to a commonly occurring problem within a given context in software design.
In simple words it's a way to resolve problems in code in well known template way.
In other words - best practices for solutions to common problems designed with good OOP in mind, common answers to common problems

Creational patterns are focused on objects creation
Structural patterns are focused on objects composition and interfaces
Behavioral patterns are focused on the communications between objects


Other patterns (in the context of Spring framework):
Inversion of Control (IoC) Pattern. It improves testability, decreases coupling, enforces coding to an interface. Objects are injected at runtime.
Benefits of IoC: noise in the code reducing, objects coupling reducing, incorrect constuction defects reducing
Since Spring4.0 Proxy pattern is used in every object managed by Spring
IoC container is a factory pattern
Singleton, prototype patterns are also used in Spring
Template pattern is widely used in remote calls (JDBC, REST related)
Entire web framework is based on MVC (not classic pattern but very important)





====================================================================================================
Factory pattern. Allows construction of similar objects(classes) of different types using a factory method. Method call creates the object for you and serves it back. Constructed objects are from classes that share an interface or parent class. Allows not to worry about class construction in more than one place. Allows to leverage the interface for repetitive operations. Lack of construction code cleans up code and also makes copy/paste errors less likely

Abstract factory pattern. Takes the pattern one step further. Factory of factories. Ads new level of abstraction that becomes powerful if you have a bunch of types that also have a bunch of types.

Builder pattern. Used in various places in Spring framework for example. ResultActions is one often used (MockMvc). In Lombok @Builder annotation is present. Each method returns the object reference it's called from. Build method returns a fully constructed object. Functionality can be combined into one class. Useful when object creation has many parameters. Becomes increasingly more useful when some or all parameters are optional. Can make code easier to read because of reduced lines for construction when compared with setters. 

Singleton pattern. Class stores reference to instance itself. Constructor is private. Static getInstance() method returns reference of self instance, or if not constucted it constructs in thread safe manner. The new command is never called on the class outside of the getInstance() method. 
Allows to minimize expensive object creation, control concurrency associated shared resources. 
In Spring framework every bean by default is a singleton. Not a classic singleton, but behaves the same. Beans must be thread safe. 

Prototype pattern. A class is created in a prototypical manner. Instance is cloned at runtime to give new instances that are not the prototpe, but act the same and have the same state. In Java this is usually done with the Cloneable interface. Prototypes are usually deep clones of objects to maintain safety.
It's very useful when object creation is expensive but the wrapper needs to be unique. 


 
