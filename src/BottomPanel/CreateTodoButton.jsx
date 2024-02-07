const CreateTodoButton = ({openModal, setOpenModal}) => {
  return (
    <button
      type="button"
      className="
        text-white
        bg-green-700 hover:bg-green-800 
        focus:ring-4 focus:ring-green-300 
        font-bold
        px-4 py-2.5
        rounded-full
      "
      onClick={ () => setOpenModal(!openModal) }
    >
      +
    </button>
  );
};

export { CreateTodoButton };
