import matplotlib.pyplot as plt
import numpy


step = 0.1
x = numpy.arange(-1, 4.5, step)
Y = x**4 - 4*x**3 + 10
plt.plot(x, Y)
plt.grid(True)
plt.legend()
plt.show()
