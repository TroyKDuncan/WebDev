# Signals

- signals are values tracked by angular
- the expression {{ name() }} is interpolated into "John"
- signals must be called as functions
- templates should only be used to output data
- functions should be in the class

# Property Binding

```html
<img [src]="imageURL()" />
```

- during the change detection phase, Angular processes templates
- when Angular comes across square brackets, it processes the attribute's value as an expression (no longer static) before rendering the template
- if imageURL is changed (with an API for example), the src attribute will be updated
- we apply properties from a class to an attribute's value in a template

# Event Binding

```html
<input (keyup)="changeImage($event)" [value]="imageURL()" />
```

- (keyup) is included with Angular and listens for a key to be released

# Type Assertion

```ts
changeImage(e: KeyboardEvent) {
    this.imageURL.set((e.target as HTMLInputElement).value);
  }
```

- e.target could be many things, but value needs to be a string, so we use "as HTMLInputElement" to make sure it is

# Creating a Component

```bash
ng generate component post
```

- this automatically generates a folder with post.component.ts, post.component.html, post.component.css, and post.component.spec.ts

