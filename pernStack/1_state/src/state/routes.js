const {Router} = require('express')
const controller = require('./controller')

const router = Router()

router.get('/', controller.getStates)
router.get('/:id', controller.getStateById)

router.post('/', controller.addState)
router.delete('/:id', controller.removeState)

router.put('/:id',controller.updateState)

module.exports = router;