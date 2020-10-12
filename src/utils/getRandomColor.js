export default () => {
  let c = {
    r: Math.floor(0),
    g: Math.floor(130+Math.random()*100),
    b: Math.floor(155+Math.random()*100)
  };
  c.rgb = 'rgb('+c.r+','+c.g+','+c.b+')';
  return c.rgb;
};
