![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

#FEWD - Forms

---
##Objectives

*  Differentiate the different types of inputs and why/where we would use each.
*  Explain how to group elements by name.
*  Perform styling of form elements.

---
##Agenda

* Forms
* Inputs
* Labels
* Styling

---

##Forms

How we can get data from users.

![](../../img/unit_2/forms.png)

---

##Forms

*  Wrapper for data collection elements 

   *  Text fields
   *  dropdowns
   *  Radio Buttons 
   *  etc
   
---


##Forms

Tells the page: 

* Where to send data
* How to send data
* Whay is being sent

---

##Form Tag

![](../../img/unit_2/form_tag.png)

Available Attributes

*  Method
*  Post,get,put,delete
*  Action
*  Url to send data to
*  Enctype
*  Multipart/form-data if uploading files

---


##Form Tag

In Action

```
<form action="register.php" method="post" enctype="multipart/form-data">
   
</form>
```

---

##Inputs

*  Place between ```<form> </form>``` tags

*  Attributes
   *  Type 
      *  Text
      *  Submit
      *  Password
      *  Email
      *  Checkbox
      *  Button
      *  Radio
      *  File
   *  Name
      *  Used server side 
   *  Placeholder
   *  Value

Note:
Complete Spec: <https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input>

*  Gotchas
   *  The font-family for an input is not inherited!!!
   *  This can lead to funny sizing issues on Macs vs. PCs where the default font is not the same


---


##Text

Use value to set initial text


![](../../img/unit_2/text.png)

![](../../img/unit_2/forms.png)

---

##Email

Allows browser to autofill field

![](../../img/unit_2/email_type.png)

![](../../img/unit_2/email.png)


---

##Password

Hides characters as typed

![](../../img/unit_2/password_type.png)

![](../../img/unit_2/password.png)

---

##Submit vs File vs Button

*  Value is button text. Defaults to submit in chrome, submit query in IE ```<input type="submit" value="Submit">```


*  Creates a file upload element ```<input type="file">```


*  Creates clickable button ```<input type="button">```

---

##Select and Option

![](../../img/unit_2/select.png)

---

##Select and Option

![](../../img/unit_2/select_type.png)

---

##Labels

Information about the input field should be put in a ```<label>``` tag

To tie the two together choose one of these methods:

```
<label>Name <input type="text" name="yourName"></label>
```

```
<label for="yourName">Name</label>
<input type="text" name="yourName" id="yourName">
```

Note:
Usability
Clicking the label text in either case places the focus in the input field (great for radio buttons)

---

##Styling

*  Can't be styled directly
   *  Checkboxes, File upload inputs, Radio buttons

*  Number of ways to do this 
   1. Opacity 0 on the element, set it's height and width to define clickable area, set the height and width of it's parent to be the same as the input (don’t forget position relative). Style the parent.
   2. Hide the element, style a corresponding label how you wanted the element to appear
   3. Try using pseudo elements and the selector :checked for no JS switching between checked and unchecked images used for styling

---

Fieldset/Legend

```
<fieldset>
Wrapper for grouped form elements
Ex: First, middle, last name text fields
<legend>
Goes inside fieldset
Defines the grouping term for the fieldset
<fieldset>
   <legend>Your Name</legend>
   <input type="text" name="first_name">
   <input type="text" name="middle_name">
   <input type="text" name="last_name">
</fieldset>
```

---

![GeneralAssemb.ly](../../img/icons/exercise_icon_md.png)
##Registration Form

---

##Homework

*	[Relaxr Form Homework](https://github.com/ga-students/FEWD-DC-17/tree/master/Week_10_Forms/Assignment)

--

##Exit Survey 

Class 17 - Forms Exit Ticket: http://goo.gl/forms/0pEh2Vyx2Y
