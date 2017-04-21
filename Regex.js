Valid Decimal :- /^[0-9]+(\.[0-9]+)?$/
Valid (. decimal) region based decimal :- /^([0-9]{1,2}(,))*([0-9]{1,3})(\.[0-9]+)?$/
Valid (, decimal) region based decimal :- /^([0-9]{1,2}(\.))*([0-9]{1,3})((,)[0-9]+)?$/

Generalized check :- (Valid Decimal && Valid (. decimal) region based decimal) In some regions like India,US etc)/(Valid Decimal && Valid (, decimal) region based decimal) In some regions like DE,FR etc)