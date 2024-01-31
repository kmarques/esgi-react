import React from "react";

function ListContainer({ model, container: Container, item: Item }) {
  return (
    <Container>
      {model.get().map((item) => {
        const actions = {};
        if (model.delete) {
          actions.onDelete = model.delete;
        }
        if (model.edit) {
          actions.onEdit = model.edit;
        }
        return <Item item={item} {...actions} />;
      })}
    </Container>
  );
}

export default ListContainer;
