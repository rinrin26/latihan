import React, { Component } from 'react' ;
import { View, ScrollView, StyleSheet } from 'react-native' ;
import heading from './srclatihan/components/heading' ;
import todoList from './srclatihan/components/todoList';
import Masuk from './srclatihan/components/Masuk' 
 
let todoIndex = 0 
class App extends Component {    
    construktor(){
    super()         
    this.state = {             
        inputValue: '',
         todos: [],             
         type: 'All'        
         }
         this.setType = this.setType.bind(this)
         this.submitTodo = this.submitTodo.bind(this)
         this.toggleComplete = this.toggleComplete.bind(this)          
         this.deleteTodo = this.deleteTodo.bind(this) 
        } 

setType(type){
    this.setType({ type})
}
      deleteTodo(todoIndex) {         
          let { todos } = this.state         
          todos = todos.filter((todo) => todo.todoIndex !== todoIndex) 
               this.setState({ todos })     }     
     toggleComplete(todoIndex) {         
         let todos = this.state.todos        
          todos.forEach((todo) => {            
               if (todo.todoIndex === todoIndex) {                 
                   todo.complete = !todo.complete             
                }        
             })        
                this.setState({ todos })     }
    }

 inputChange(inputValue) { 
     }     
     submitTodo() {      
     } 

    
    render() {    
        const { inputValue ,todos} = this.state     
        <TodoList toggleComplete={this.toggleComplete}
         deleteTodo={this.deleteTodo } todos={todos} />
         <Button submitTodo={this.submitTodo} /> 
        
        
        return (            
             <View style={styles.container}>                
              <ScrollView keyboardShouldPersistTaps='always' style={styles.content}>                     
              <Heading />
                <Input inputValue={inputValue}                   
                        inputChange={(text) => this.inputChange(text)} />             
                    <Button submitTodo={this.submitTodo} />              
               </ScrollView>            
                </View>       
             ) ; 
         }
     } 
 
   
 


const styles = StyleSheet.create({     
    container: {       
          flex: 1,         
          backgroundColor: '#f5f5f5'   
          },    
     content: {         
         flex: 1, 
         paddingTop: 60     
        } 
 }) 
 
export default App 
 
 