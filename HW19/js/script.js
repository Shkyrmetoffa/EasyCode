/* task 0
Даны строки разделенные различным образом,
верните строки разделенные / или _, в нижнем регистре

*/
let solution = (str) => {
    str = str.replace(/::/g, '/').replace(/-/g, '_');
    console.log(str);
}
solution("ActiveModel::ErrorsActiveModel::Errors"); // => active_model/errors"
solution("HelloHowAreYou"); // => "hello_how_are_you"
solution("MyNAMEIsBOND-JamesBond"); // => my_name_is_bond_james_bond"
solution("MAINCompany::BEST-MAINUser"); // => "main_company/best_main_user"