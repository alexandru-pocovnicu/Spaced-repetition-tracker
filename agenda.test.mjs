import test from "node:test";
import assert from "node:assert";
import { createAgendaItem } from "./agenda.mjs";
test("create revision dates from a start date",()=>{
    const topic="Practice arrays"
    const startDate="2027-07-19"
    const result=createAgendaItem(topic,startDate)
    
    assert.equal(result.length, 5);
    assert.equal(result[0].date, "2027-07-26");
    assert.equal(result[1].date, "2027-08-19");
    assert.equal(result[2].date, "2027-10-19");
    assert.equal(result[3].date, "2028-01-19");
    assert.equal(result[4].date, "2028-07-19");
    
})