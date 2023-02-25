<script>
  import * as d3 from "d3";

  const width = 500;
  const height = 500;
  const radius = 6;
  const step = radius * 2;

  const theta = Math.PI * (3 - Math.sqrt(5));
  const data = Array.from({length: 2000}, (_, i) => {
    const radius = step * Math.sqrt(i += 0.5)
    const a = theta * i;
    return {
      x: width / 2 + radius * Math.cos(a),
      y: height / 2 + radius * Math.sin(a),
    };
  });
</script>