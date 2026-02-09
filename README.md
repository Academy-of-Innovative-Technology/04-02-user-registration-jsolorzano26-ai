[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=22596063&assignment_repo_type=AssignmentRepo)
# User Registration ➜ Object ➜ LocalStorage ➜ Display

## Goal

You will take values from a registration form, store them inside a **JavaScript object**, save that object to **localStorage**, and then **display the saved data** inside an empty “Saved Registration” section on the page.

Think of it like packing a suitcase 🧳:

1) Collect items (form values)  
2) Put them in one suitcase (object)  
3) Lock it in a closet (localStorage)  
4) Unpack it onto the screen (display section)

---

### Requirements

Your JavaScript must include:

- document
  - `.querySelector()` or `.getElementById()` or `.getElementsByClassName()`)
- `.value` to collect values
- localStorage
  - `.setItem()`
  - `.getItem()`
- JSON
  - `.stringify()` and `JSON.parse()`
- A function to **display saved user data** on the page

---

## Step 1: Select Your Form Elements

In your `script.js`, use `document.querySelector()` to grab each form input.

You will need:

- First Name input
- Last Name input
- Email input
- Password input (optional to display, but still store)
- Country select menu
- Account Type radio buttons (Standard/Premium)
- About You textarea
- The form itself

---

## Step 2: Get the Values When the Form Submits

Add an event listener to the form:

- Use `event.preventDefault()` so the page does NOT refresh

Inside the submit event:

- Get text values using `.value`
- Get checkbox values using `.checked` (if you have one)
- Get selected radio value by finding the radio that is checked

**Important:**
Account Type uses radio buttons, so you must locate the selected one.

✅ Helpful hint:

- Use `document.querySelector('input[name="accountType"]:checked')`

---

## Step 3: Create a User Object

Create an object that stores all registration data in ONE place.

Your object should include keys like:

- `firstName`
- `lastName`
- `email`
- `password`
- `country`
- `accountType`
- `about`

Example object shape (not full code):

- `const user = { firstProp: ..., secondProp: ..., ... }`

---

## Step 4: Save the Object to LocalStorage

LocalStorage only stores **strings**, so you must convert the object to JSON.

### Required Methods

- `JSON.stringify(user)` converts object to string
- `localStorage.setItem("registeredUser", jsonString)` saves the string

---

## Step 5: Load the Object from LocalStorage

When you want to display saved user data:

1. Get the string using:
   - `localStorage.getItem("registeredUser")`

2. Convert it back to an object using:
   - `JSON.parse(savedString)`

3. Store it in a variable like:
   - `const savedUser = ...`

---

## Step 6: Display the Saved Data in the Empty Fields

Your “Saved Registration” section has empty `<span>` elements like:

- `#savedFirstName`
- `#savedLastName`
- `#savedEmail`
- `#savedCountry`
- `#savedAccountType`
- `#savedAbout`

### What to Do

After loading `savedUser`, set each span’s text:

- `savedFirstNameSpan.textContent = savedUser.firstName`
- etc.

✅ You must display:
- First name
- Last name
- Email
- Country
- Account type
- About section

## Suggested Functions (Recommended)

Create functions to keep your code clean:

- `saveUser()`  
- `loadUser()`  
- `displayUser(userObj)`  
- `clearUser()` (optional)

---

## Checklist (Before Submitting)

- [ ] Form submit does NOT refresh the page (`preventDefault`)
- [ ] Values are collected from all fields
- [ ] A single object is created with the values
- [ ] Object is saved using `JSON.stringify()` + `localStorage.setItem()`
- [ ] Object is loaded using `localStorage.getItem()` + `JSON.parse()`
- [ ] Saved data appears in the empty `<span>` display fields
- [ ] Display panel hides/shows correctly based on saved data

---

## Extension Challenges (Optional)

- ⭐ Add a “Clear Saved User” button that removes `"registeredUser"`
- ⭐ Auto-load saved user on page refresh (run `loadUser()` when the page loads)
- ⭐ Add a success alert: “Registration Saved!”
