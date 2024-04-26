import { NextFunction, Request, Response } from "express";
import { asyncHandler } from "../../../middlewares/async.middleware";
import ErrorResponse from "../../../utils/errorResponse";
import bootcampModel from "../model/bootcamp.model";

// @desc Get all bootcamp
// @route /api/v1/bootcamp
// @access public
export const getBootcamps = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const bootcamps = await bootcampModel.find();

    return res.status(200).json({
      success: true,
      msg: "Show all bootcamp",
      data: bootcamps,
    });
  }
);

// @desc Get a single bootcamp
// @route /api/v1/bootcamp/:id
// @access public

export const getBootcamp = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const bootcamp = await bootcampModel.findOne({ _id: req.params.id });

    if (!bootcamp) {
      throw new ErrorResponse(
        `Resource not found of id #${req.params.id}`,
        402
      );
    }

    return res.status(200).json({
      success: true,
      msg: `Get a single bootcamp  of id ${req.params.id}`,
      data: bootcamp,
    });
  }
);

// @desc create a single bootcamp
// @route /api/v1/bootcamp/:id
// @access public

export const createBootcamp = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const bootcamp = await bootcampModel.create(req.body);

    return res.status(200).json({
      success: true,
      msg: "Create a new bootcamp",
      data: bootcamp,
    });
  }
);

// @desc update a single bootcamp
// @route /api/v1/bootcamp/:id
// @access public

export const updateBootcamp = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const updateData = await bootcampModel.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      { $set: req.body },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      msg: `Update a single bootcamp of id ${req.params.id}`,
      data: updateData,
    });
  }
);

// @desc delete a single bootcamp
// @route /api/v1/bootcamp/:id
// @access public
export const deleteBootcamp = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const bootcamp = await bootcampModel.deleteOne({ _id: req.params.id });
    console.log("🚀 ~ bootcamp:", bootcamp);

    if (!bootcamp) {
      throw new ErrorResponse(`Resource not found of id #${req.params.id}`, 401);
    }

    return res.status(200).json({
      success: true,
      msg: `Delete a sinle bootcamp  of id ${req.params.id}`,
      data: bootcamp,
    });
  }
);


