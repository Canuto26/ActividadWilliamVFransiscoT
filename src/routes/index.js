import {Router } from 'express'
const router=Router ()
router.get('/',(req,res)=> res.render ('index.ejs'))
router.get('/pag2', (req,res)=> res.render('pag2.ejs'))
export default router
