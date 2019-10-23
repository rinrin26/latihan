import React from 'react' ;
import { View } from 'react-native'  ;
import todo from './todo' ;
 
const todoList = ({ todos }) => {     
    todos = todos.map((todo, i) => {         
        return (            
             <Todo key={todo.todoIndex} todo={todo} />        

             const TodoList = ({ todos, deleteTodo, toggleComplete }) => {    
                  todos = todos.map((todo, i) => {       
                        return (            
                             <Todo               
                               key={i}                 
                               deleteTodo={deleteTodo}               
                                 toggleComplete={toggleComplete}                 
                                todo={todo} />        
                                
                                )     
                            }
              )    
             }  
         return (        
              <View>            
                   {todos}         
             </View>     
            ) 
        } 
 
export default todoList ;
 
 