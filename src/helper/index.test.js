import { getMaxId, maxValue } from './index';

describe('getMaxId', () =>{
    const arrObj = [{id: 1}, {id: 2}, {id: 3}];
    describe('giving an empty array', () =>{
        it('should return 0', () =>{
            expect(getMaxId([])).toEqual(0);
        });
    });

    describe('giving an array of object', () =>{
        it('should return the max id', () =>{
            expect(getMaxId(arrObj)).toEqual(3);
        });
    });
});

describe('maxValue', () =>{
    const obj = {id: 1};
    describe('giving a object id higher than value', () =>{
        it('should return object id', () =>{
            expect(maxValue(0, obj)).toEqual(1);
        });
    });
    describe('giving a object id lower than value', () =>{
        it('should return the value', () =>{
            expect(maxValue(2, obj)).toEqual(2);
        });
    });
});