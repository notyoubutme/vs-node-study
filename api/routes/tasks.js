const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
    res.status(200).json({
        message: "/task/all/  get request"
    });
});

router.post('/', (req, res, next)=>{
    res.status(200).json({
        message: "/task/all/  post request"
    });
});

router.get('/:taskId', (req, res, next)=>{
    const id = req.params.taskId;
    if (id === 'sp'){
        res.status(200).json({
            message: "/task/all/sp  get request",
            id: id
        });
    }else{
        res.status(200).json({
            message: "/tasks/all/  get request",
            id: id
        });
    }
    
});

router.patch('/:taskId', (req, res, next)=>{
    const id = req.params.taskId;
    if (id === 'sp'){
        res.status(200).json({
            message: "/task/all/sp  patch request",
            id: id
        });
    }else{
        res.status(200).json({
            message: "/task/all/  patch request",
            id: id
        });
    }
    
});

router.delete('/:taskId', (req, res, next)=>{
    const id = req.params.taskId;
    if (id === 'sp'){
        res.status(200).json({
            message: "/task/all/sp  delete request",
            id: id
        });
    }else{
        res.status(200).json({
            message: "/task/all/  delete request",
            id: id
        });
    }
    
});


module.exports = router;