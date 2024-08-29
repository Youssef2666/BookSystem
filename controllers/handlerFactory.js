const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');



exports.deleteOne = Model => catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);
    if(! doc){
        return next(new AppError('No document found with that ID', 404));
    }
    res.status(204).json({
        status: 'success',
        message: 'deleted successfully',
        results: doc.length,
        data: {
            data: doc
        }
    });
});

exports.updateOne = Model => catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body);
    if(! doc){
        return next(new AppError('No document found with that ID', 404));
    }
    res.status(200).json({
        status: 'success',
        message: 'updated successfully',
        data: {
            data: doc
        }
    });
});

exports.getOne = Model => catchAsync(async (req, res, next)=>{
    const doc = await Model.findById(req.params.id);
    if(! doc){
        return next(new AppError('No document found with that ID', 404));
    }
    res.status(200).json({
        status: 'success',
        data: {
            data: doc
        }
    })
});


exports.getAll = Model => catchAsync(async (req, res, next)=> {
    const doc = await Model.find();
    if (! doc){
        return new AppError('No documents found', 404);
    } 
    res.status(200).json({
        status: 'success',
        data: {
            data: doc
        }
    })
})


exports.getByFilter = Model => catchAsync(async (req, res, next)=> {
    const doc = await Model.find(req.query);
    if (! doc){
        return new AppError('No documents found', 404);
    }
    res.status(200).json({
        status: 'success',
        data: {
            data: doc
        }
    }) 
})


exports.createOne = Model => catchAsync(async (req, res, next)=> {
    const doc = await Model.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            data: doc
        }
    })
})
