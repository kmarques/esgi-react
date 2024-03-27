import React from "react";

function ListContainer({ model, container: Container, item: Item }) {
  const data = model.get();
  const loading = model.isLoading();
  return (
    <Container>
      {loading && <progress />}
      {!loading &&
        data.map((item) => {
          const actions = {};
          if (model.delete) {
            actions.onDelete = model.delete;
          }
          if (model.edit) {
            actions.onEdit = model.edit;
          }
          return <Item key={item.id} item={item} {...actions} />;
        })}
    </Container>
  );
}

export default ListContainer;
