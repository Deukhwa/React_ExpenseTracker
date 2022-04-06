import Expenses from './components/Expenses'

function App() {
  const expenses = [
    {
      title: 'Car Insurnace',
      amount: 294.65,
      date: new Date(2022, 3, 5),
    },
    {
      title: 'Toilet paper',
      amount: 24.22,
      date: new Date(2022, 2, 2),
    },
    {
      title: 'Laptop',
      amount: 904.65,
      date: new Date(2022, 3, 2),
    },
    {
      title: 'iPhone',
      amount: 1114.65,
      date: new Date(2022, 3, 5),
    },
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  )
}

export default App
