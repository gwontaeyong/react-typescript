import React, { ReactChild } from "react";
import "./TodoTemplate.css"

// Props 에 대한 타입 정의
interface TodoFormProps {
    form: ReactChild
    todoList: ReactChild
};

class TodoTemplate extends React.Component<TodoFormProps>{
    
    constructor(props: TodoFormProps){
        super(props);    
    }
    render(){
        return <main className="todo-list-template">
            <div className="title">
                내가 할 일
            </div>
            <section className="form-wrapper">
                {this.props.form}
            </section>
            <section className="form-wrapper">
                {this.props.todoList}
            </section>
        </main>
    }
}

// isolatedModules : ture 옵션을 켜뒀기에 각 script는 별도의 모듈로 변환 되어야 한다.
export default TodoTemplate