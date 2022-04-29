function isTriangle(a,b,c)
{
  if((a + b) <= c) return false;
  else if ((b + c) <= a) return false;
  else if((a + c) <= b) return false;
  else return true;
}