const form = document.getElementById('my-form')

const name = document.getElementById('name')

const email = document.getElementById ('email')

const button = document.getElementById('form-button')



document.addEventListener('DOMContentLoaded', function(){

    let arrayOfKeys = Object.keys(localStorage)


    arrayOfKeys.forEach(function(key){

        const valuesAgainstKeysInLocal = localStorage.getItem(key)
  
        const unstringifiedValuesAgainstKeys = JSON.parse(valuesAgainstKeysInLocal)
   
        const nameValue = unstringifiedValuesAgainstKeys.name
        const emailValue = unstringifiedValuesAgainstKeys.email

        const creatingH4ForName = document.createElement('h4')
      
        const creatingH4ForEmail = document.createElement('h4')

        creatingH4ForName.innerHTML = nameValue
        creatingH4ForEmail.innerHTML = emailValue
  
        creatingH4ForEmail.classList.add('email-h4-class')


        const editButtonForRelodedData = document.createElement('button')
        const deleteButtonForRelodedData = document.createElement('button')

        editButtonForRelodedData.classList.add('editBtn')
        deleteButtonForRelodedData.classList.add('deleteBtn')
   
        editButtonForRelodedData.innerText = 'Edit'
        deleteButtonForRelodedData.innerText = 'Delete'


        const innerDivForRelodedData = document.createElement('div')

        innerDivForRelodedData.classList.add('single-item')

        const parentDivOfAllData = document.getElementById('div-containing-items')
        parentDivOfAllData.appendChild(innerDivForRelodedData)
        innerDivForRelodedData.appendChild(creatingH4ForName)
        innerDivForRelodedData.appendChild(creatingH4ForEmail)
        innerDivForRelodedData.appendChild(editButtonForRelodedData)
        innerDivForRelodedData.appendChild(deleteButtonForRelodedData)

        

        deleteButtonForRelodedData.addEventListener('click', function(){
            
            const targetElementEmailThroughEditBtnInRelodedData = deleteButtonForRelodedData.previousSibling
            const targetKeyEmailElementForRelodedData = targetElementEmailThroughEditBtnInRelodedData.previousSibling
     
            const targetElementInnerHtmlForRelodedData = targetKeyEmailElementForRelodedData.innerHTML
    
       
            localStorage.removeItem(targetElementInnerHtmlForRelodedData)
    
            const parent_div_of_this_delete_button_for_reloded_data = deleteButtonForRelodedData.parentElement

            parent_div_of_this_delete_button_for_reloded_data.remove()
    
        })

        editButtonForRelodedData.addEventListener('click', function(){
     
            const nameElementForRelodedData = editButtonForRelodedData.previousSibling.previousSibling
            const emailElementForRelodedData = editButtonForRelodedData.previousSibling
   
            const nameElementInnerHtmlForRelodedData = creatingH4ForName.innerHTML         
            const emailElementInnerHtmlForRelodedData = creatingH4ForEmail.innerHTML

            const nameInputBoxForRelodedData = document.getElementById('name')
            const emailInputBoxForRelodedData = document.getElementById('email')
    

            nameInputBoxForRelodedData.value = nameElementInnerHtmlForRelodedData
            emailInputBoxForRelodedData.value = emailElementInnerHtmlForRelodedData

            localStorage.removeItem(emailElementInnerHtmlForRelodedData)
    

            const targetButtonParentForRelodedData=editButtonForRelodedData.parentElement
            targetButtonParentForRelodedData.remove()
            

        })
    })


    button.addEventListener('click', onsubmit)

    function onsubmit(e){
        e.preventDefault()

        obj = {
            'name': name.value,
            'email':email.value
        }

        let stringfiedDetails = JSON.stringify(obj)

        const innerDiv = document.createElement('div')
        const nameContainerH4 = document.createElement('h4')
        const emailContainerH4 = document.createElement('h4')

        innerDiv.classList.add('single-item')    

        const editButton = document.createElement('button')
        const deleteButton = document.createElement('button')

        editButton.classList.add('editBtn')
        deleteButton.classList.add('deleteBtn')

     
        editButton.innerHTML = 'Edit'
        deleteButton.innerHTML = 'Delete'

    
        emailContainerH4.classList.add('email-h4-class')

       const parentDiv = document.getElementById('div-containing-items')
        parentDiv.appendChild(innerDiv)


        nameContainerH4.innerHTML = name.value
        emailContainerH4.innerHTML = email.value

       
        let checkEmail = email.value

        let allKeysInLocalStorage = Object.keys(localStorage)

        if(allKeysInLocalStorage.length >0){
            allKeysInLocalStorage.forEach(function(key){
                    
                if (checkEmail == key){

                    const Duplicate_Data = document.querySelectorAll('.email-h4-class')

                    for(i=0; i<Duplicate_Data.length; i++ ) {
           
                        if(Duplicate_Data[i].innerHTML == checkEmail){
                          
                            const parentDiv = Duplicate_Data[i].parentElement
                   
                            parentDiv.remove()
                        } 
                    }

             
                    innerDiv.appendChild(nameContainerH4)
                    innerDiv.appendChild(emailContainerH4)
                    innerDiv.appendChild(editButton)
                    innerDiv.appendChild(deleteButton)
                    localStorage.setItem(checkEmail,stringfiedDetails)
                }else{

                    innerDiv.appendChild(nameContainerH4)
                    innerDiv.appendChild(emailContainerH4)
                    innerDiv.appendChild(editButton)
                    innerDiv.appendChild(deleteButton)
            
                    localStorage.setItem(checkEmail,stringfiedDetails)
                }
            })
        }else{

            innerDiv.appendChild(nameContainerH4)
            innerDiv.appendChild(emailContainerH4)
            innerDiv.appendChild(editButton)
            innerDiv.appendChild(deleteButton)

            localStorage.setItem(checkEmail,stringfiedDetails)
        }

 
        name.value = ''
        email.value = ''



        deleteButton.addEventListener('click', function(){        

            const targetElementEmailThroughEditBtn = deleteButton.previousSibling
   
            const targetKeyEmailElement = targetElementEmailThroughEditBtn.previousSibling
   
            const targetElementInnerHtml = targetKeyEmailElement.innerHTML

            localStorage.removeItem(targetElementInnerHtml)

            const parent_div_of_this_delete_button = deleteButton.parentElement
       
            parent_div_of_this_delete_button.remove()

            

        })

      
        editButton.addEventListener('click', function(){
     
            const nameElement = editButton.previousSibling.previousSibling
           
            const emailElement = editButton.previousSibling
           
            const nameElementInnerHtml = nameElement.innerHTML         
 
            const emailElementInnerHtml = emailElement.innerHTML

            const nameInputBox = document.getElementById('name')
            const emailInputBox = document.getElementById('email')
    
            nameInputBox.value = nameElementInnerHtml
            emailInputBox.value = emailElementInnerHtml

            localStorage.removeItem(emailElementInnerHtml)

            const targetButtonParent=editButton.parentElement
            targetButtonParent.remove()

            

        })
    }
})








