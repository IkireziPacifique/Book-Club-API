import Borrow from "../models/borrow.model.js";


// Create Record borrow/
export async function addRecord(req, res) {
    try {
        let record = await Record.create(req.body);
        if (record) {
            res.status(200).json({
                success: true,
                message: 'Record created successfully',
                data: record
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'Record could not be created at this time'
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

// View Record borrow
export async function viewRecord(req, res) {
    try {
        let allrecords = await Borrow.findAll({where: {record_id: req.params.id}});
        if (allrecords) {
            res.json({
                success: true,
                message: 'Records retrieved successfully',
                data: allrecords
            })
        } else {
            res.json({
                success: true,
                message: 'No Record found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

// View all records borrow
export async function viewAllRecord(req, res) {
    try {
        let allrecords = await Member.findAll();
        if (allrecords) {
            res.json({
                success: true,
                message: 'Record retrieved successfully',
                data: allrecords
            })
        } else {
            res.json({
                success: true,
                message: 'No Record records found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

// Update borrowing record borrow
export async function updateRecord(req, res) {
    try {
        let record = await Record.update(req.body);
        if (record) {
            res.status(200).json({
                success: true,
                message: 'Record updated successfully',
                data: book
            })
        } else {
            res.json({
                success: true,
                message: 'Record not found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

// View Member Borrowings borrow
export async function viewMemberRecord(req, res) {
    try {
        let member = await Borrow.findAll({where: {member_id: req.params.id}});
        if (member) {
            res.json({
                success: true,
                message: 'Member retrieved successfully',
                data: member
            })
        } else {
            res.json({
                success: true,
                message: 'No Member found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

