const student = require("../models/students");
const feeDetail = require("../models/fee_details");
class UserController {
  static getFeeDetails(req, res) {
    var rollNumberToFind = "15";
    student.find(
      { roll_number: rollNumberToFind },
      { student_name: 1, roll_number: 1, basic_fee: 1, others: 1 },
      (error, result) => {
        if (error) throw error;
        res.send(result);
      }
    );
  }
  static postFee(req, res) {
    var rollNumberToFind = "4";
    feeDetail.find(
      { student_id: rollNumberToFind },
      { arrears: 1 },
      (error, feeDetailResult) => {
        if(!feeDetailResult){
          console.log(error);
          feeDetailResult = {arrears : 0}
          
        }
        student.find(
          { roll_number: rollNumberToFind },
          { student_name: 1, roll_number: 1, basic_fee: 1, others: 1 },
          (error, studentResult) => {
            const details = {
              id: req.body.id,
              student_name: studentResult[0].student_name,
              student_id: studentResult[0].roll_number,
              basic_fee: studentResult[0].basic_fee,
              current_paid_fee: req.body.current_paid_fee,
              others: studentResult[0].others,
              arrears: req.body.arrears,
              date: req.body.date,
            };
            if(lastarrears){
            const fee = parseInt(details.basic_fee);
            const others = parseInt(details.others);
            const lastarrears = parseInt(feeDetailResult[feeDetailResult.length - 1].arrears);
            let totalAmountToPay = fee + others + lastarrears ;
            console.log(totalAmountToPay)
            details.arrears = totalAmountToPay - details.current_paid_fee
            console.log(details.arrears)

            console.log(lastarrears);}
            else{
              const fee = parseInt(details.basic_fee);
            const others = parseInt(details.others);
            let totalAmountToPay = fee + others  ;
            console.log(totalAmountToPay)
            details.arrears = totalAmountToPay - details.current_paid_fee
            console.log(details.arrears)


            

            }
                                  
            if (error) throw error;
            feeDetail.insertMany(details, (error, result) => {
              if (error) throw error;
              res.send("operation succesfull");
            });
          }
        );
      }
    );
  }
}
module.exports = UserController;
