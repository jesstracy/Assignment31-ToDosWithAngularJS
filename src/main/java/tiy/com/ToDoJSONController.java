package tiy.com;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

/**
 * Created by jessicatracy on 9/19/16.
 */
@RestController
public class ToDoJSONController {
    @Autowired
    ToDoRepository todos;

    @RequestMapping(path = "/todo.json", method = RequestMethod.GET)
    public ArrayList<ToDo> getJsonTodos() {
        ArrayList<ToDo> toDoList = new ArrayList<ToDo>();
        Iterable<ToDo> allTodos = todos.findAll();
        for (ToDo currentTodo : allTodos) {
            toDoList.add(currentTodo);
        }
        return toDoList;
    }
}
