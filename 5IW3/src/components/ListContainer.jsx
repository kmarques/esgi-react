export default function ListContainer({
  model,
  item: Item,
  container: Container,
  form: Form,
}) {
  return (
    <Container>
      {model.get().map((item) => (
        <Item
          key={item.id}
          item={item}
          edit={model.edit}
          delete={model.delete}
        />
      ))}
      {model.add && <Form onSubmit={model.add} />}
    </Container>
  );
}
