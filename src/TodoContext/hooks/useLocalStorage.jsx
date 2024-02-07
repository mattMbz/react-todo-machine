import React from "react";

function useLocalStorage(initialName, initialValue) {
  let parsedItems;
  let parsedTotal = 0.0;

  const [items, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [total, setTotal] = React.useState(parseFloat(parsedTotal));

  const localStorageItems = localStorage.getItem(initialName);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        if (!localStorageItems) {
          localStorage.setItem(initialName, JSON.stringify(initialValue));
          localStorage.setItem("TOTAL", JSON.stringify(0.0));
          parsedItems = initialValue;
        } else {
          parsedItems = JSON.parse(localStorageItems);
          setItem(parsedItems);
          parsedTotal = totalSum();
          saveTotal(parsedTotal);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, []);

  const totalSum = () => {
    let total = 0;
    let itemsFromLocalStorage = JSON.parse(localStorageItems);

    for (let key in itemsFromLocalStorage) {
      if (itemsFromLocalStorage[key].completed == false) {
        itemsFromLocalStorage[key].price = 0.0;
        localStorage.setItem(
          initialName,
          JSON.stringify(itemsFromLocalStorage)
        );
      }
      total = total + itemsFromLocalStorage[key].price;
    }

    return total;
  };

  const saveItem = (newItems) => {
    localStorage.setItem(initialName, JSON.stringify(newItems));
    setItem(newItems);
  };

  const saveTotal = (newTotal) => {
    localStorage.setItem("TOTAL", JSON.stringify(newTotal));
    setTotal(newTotal);
  };

  return [
    { items: items, total: total },
    {
      saveTodo: saveItem,
      saveTotal: saveTotal,
      loading: loading,
      error: error,
    },
  ];
}

export { useLocalStorage };
