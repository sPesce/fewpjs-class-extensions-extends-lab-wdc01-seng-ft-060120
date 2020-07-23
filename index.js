const addSides = (sum,side) =>
{
  return sum + side;
}

class Polygon
{
  constructor(sideLengths)
  {
    this.sideLengths = sideLengths;
  }

  get countSides()
  {
    return this.sideLengths.length;
  }
  get perimeter()
  {
    return this.sideLengths.reduce(addSides);
  }
}

class Triangle extends Polygon
{
  get isValid()
  {
    const a = this.sideLengths[0];
    const b = this.sideLengths[1];
    const c = this.sideLengths[2];
    if( this.sideLengths.length != 3 ||(a+b) < c || (b+c) < a || (a+c) < b )
      return false;
    return true;
  }
}

class Square extends Polygon
{
  get isValid()
  {
    if (this.sideLengths.length != 4)
      return false;

    for(let i = 0; i < 3 ; i++)
    {//does not need to check if a=c because if a=b=d=c => a=c
      if(this.sideLengths[i] != this.sideLengths[i+1])
        return false;
    }

    return true;
  }
  get area()
  {
    if (this.isValid)
      return this.sideLengths[0]**2;
    return undefined;
  }
}