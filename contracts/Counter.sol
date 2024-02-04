pragma solidity ^0.8.9;

contract Counter{
    uint 256 public counter;
    event CounterIncremented(uint256 newCounterValue);

    constructor(){
        counter = 0;
    }

    function incrementCounter() public{
        counter +=1;
        emit CounterIncremented(counter);
    }

    function getCounter() public view returns(uint256){
        return counter;
    }
}

