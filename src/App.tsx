import Button from '@suid/material/Button'

const App = () => {
  let count = $signal(1)

  let multiple = $signal(1)
  let obj = $signal({
    name: 'John',
    age: 30,
  })
  $effect(() => {
    console.log(`${obj.name} is ${obj.age} years old`)
  })
  return (
    <div class="bg:red">
      {count}
      <span>{obj.name}</span>
      <span>{obj.age}</span>
      <Button
        variant="outlined"
        onClick={() => {
          multiple += 1
          count += multiple
          obj = {
            ...obj,
            name: obj.name + 'c',
            age: obj.age + 1,
          }
        }}
        size="medium"
      >
        add
      </Button>
    </div>
  )
}

export default App
