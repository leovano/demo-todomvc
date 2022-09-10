import { nanoid } from "nanoid";
import { useState } from "preact/hooks";

import useTodoStore, { TodoTask } from "../../../state/todo";
import Footer from "../../main/Footer";
import FooterLeftContent from "../../main/Footer/LeftContent";
import FooterRightButton from "../../main/Footer/RightButton";
import FooterTabItem from "../../main/Footer/TabItem";
import FooterTabs from "../../main/Footer/Tabs";
import Input from "../../main/Input";
import TodoItem from "../../main/TodoItem";
import TodoItemCheckBox from "../../main/TodoItem/CheckBox";
import TodoItemContent from "../../main/TodoItem/Content";
import TodoItemContentEdit from "../../main/TodoItem/ContentEdit";
import TodoItemRemoveButton from "../../main/TodoItem/RemoveButton";
import TodoItemStatus from "../common/TodoItemStatus";

import { Container, ListContainer, MainCard } from "./styled";

interface AppParams {
  status: TodoItemStatus;
}

const getCurrentTaskList = (tasks: TodoTask[], status: TodoItemStatus) => {
  switch (status) {
    case TodoItemStatus.All:
      return tasks;
    case TodoItemStatus.Active:
      return tasks.filter((item) => !item.checked);
    case TodoItemStatus.Completed:
      return tasks.filter((item) => item.checked);
  }
};

const App = ({ status }: AppParams) => {
  const [input, setInput] = useState("");

  const tasks = useTodoStore((store) => store.tasks);
  const addTask = useTodoStore((store) => store.add);
  const removeTask = useTodoStore((store) => store.remove);
  const markTask = useTodoStore((store) => store.mark);
  const editTask = useTodoStore((store) => store.edit);
  const editModeTask = useTodoStore((store) => store.editMode);
  const checkAllTask = useTodoStore((store) => store.checkAll);
  const clearDoneTask = useTodoStore((store) => store.clearDone);

  const checkedItems = tasks.filter((item) => item.checked);
  const total = tasks.length;
  const allChecked =
    tasks.length > 0 && tasks.every((item) => item.checked === true);
  const currentList = getCurrentTaskList(tasks, status);

  const handleInput = ({
    currentTarget: { value },
  }: React.FormEvent<HTMLInputElement>) => {
    setInput(value);
  };

  const handleCheckAll = () => {
    checkAllTask();
  };

  const handleEditItemContent = (id: string) => {
    return ({
      currentTarget: { value },
    }: React.ChangeEvent<HTMLInputElement>) => {
      editTask(id, value);
    };
  };

  const handleDbClickItemContent = (id: string) => {
    return () => {
      editModeTask(id, true);
    };
  };

  const handleItemContentBlur = (id: string) => {
    return () => {
      editModeTask(id, false);
    };
  };

  const handleItemCheckbox = (id: string) => {
    return (checked: boolean) => {
      markTask(id, checked);
    };
  };

  const handleClickItemRemoveButton = (id: string) => {
    return () => {
      removeTask(id);
    };
  };

  const handleClickClearCompleted = () => {
    clearDoneTask();
  };

  const handleSubmit = (e: JSX.TargetedEvent<HTMLFormElement>) => {
    e.preventDefault();
    const content = input.trim();
    if (content.length > 0) {
      addTask({ id: nanoid(), checked: false, editMode: false, content });
      setInput("");
    }
  };

  return (
    <Container>
      <MainCard>
        <form onSubmit={handleSubmit}>
          <Input
            value={input}
            onChange={handleInput}
            allChecked={allChecked}
            onCheckAll={handleCheckAll}
          />
        </form>

        <ListContainer>
          {currentList.map((item) => (
            <TodoItem key={item.id} className="todo-item">
              <TodoItemCheckBox
                taskID={item.id}
                checked={item.checked}
                onChange={handleItemCheckbox(item.id)}
              />
              {item.editMode ? (
                <TodoItemContentEdit
                  value={item.content}
                  onChange={handleEditItemContent(item.id)}
                  onBlur={handleItemContentBlur(item.id)}
                />
              ) : (
                <TodoItemContent
                  onDoubleClick={handleDbClickItemContent(item.id)}
                  completed={item.checked}
                >
                  {item.content}
                </TodoItemContent>
              )}
              <TodoItemRemoveButton
                className="todo-remove-button"
                onClick={handleClickItemRemoveButton(item.id)}
              />
            </TodoItem>
          ))}
        </ListContainer>

        <Footer>
          {total > 0 && (
            <FooterLeftContent>
              {total} item{total > 1 && "s"} left
            </FooterLeftContent>
          )}
          <FooterTabs>
            <FooterTabItem
              to="/"
              className={status === TodoItemStatus.All && "active"}
            >
              {TodoItemStatus.All}
            </FooterTabItem>
            <FooterTabItem
              to={`/${TodoItemStatus.Active}`}
              className={status === TodoItemStatus.Active && "active"}
            >
              {TodoItemStatus.Active}
            </FooterTabItem>
            <FooterTabItem
              to={`/${TodoItemStatus.Completed}`}
              className={status === TodoItemStatus.Completed && "active"}
            >
              {TodoItemStatus.Completed}
            </FooterTabItem>
          </FooterTabs>
          {checkedItems.length > 0 && (
            <FooterRightButton onClick={handleClickClearCompleted} />
          )}
        </Footer>
      </MainCard>
    </Container>
  );
};

export default App;
