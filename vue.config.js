const bodyParser = require('body-parser')

const items = []

const createError = msg => ({
  code: 1,
  msg
})
const createSuccess = msg => ({
  code: 0,
  msg
})

module.exports = {
  devServer: {
    before(app) {
      app.use(bodyParser.json())
      app.use(bodyParser.urlencoded({
        extended: true
      }))
      app.get('/api/items', (req, res) => {
        res.send({
          ...createSuccess('获取成功'),
          items,
        })
      })
      app.delete('/api/item/:id', (req, res) => {
        const index = items.findIndex(item => item.id === Number(req.params.id))
        if (index === -1) {
          return res.send(createError('删除失败'))
        } else {
          items.splice(index, 1)
          return res.send(createSuccess('删除成功'))
        }
      })
      app.post('/api/item', (req, res) => {
        const length = items.length
        const item = {
          id: length === 0 ? 1 : items[length - 1].id + 1,
          text: req.body.text,
          completed: false
        }
        items.push(item)
        res.send({
          ...createSuccess('添加成功'),
          item
        })
      })
      app.post('/api/item/:id', (req, res) => {
        const item = items.find(item => item.id === Number(req.params.id))
        if (item) {
          item.text = req.body.text,
            item.completed = req.body.completed
          res.send({
            ...createSuccess('修改成功'),
            item
          })
        } else {
          res.send(createError('修改失败'))
        }
      })
    },
  },
}