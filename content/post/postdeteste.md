+++
Title = "Um post de testes"
Description = "Esse post serve meramente para testar como o Latex se comporta neste site! :D...por isso que não tem imagem! D:"
thumb = ""
Tags = []
Categories = []
creation_date = 2023-01-19T19:29:00-03:00
+++

Seja $V$ um espaço vetorial em $\mathbb{R}$ e sejam $v_1, \, v_2, \, \dots v_n$ (com $v_i \in V$) $n$ vetores linearmente independentes.
Suponha que existam $u_1, \, u_2, \dots u_m$ (com $u_i \in V$) tais que $V = \text{span} \left( u_1, \dots , u_m \right)$.

Prove que $m \geq n$.

**Caso 1:** Os vetores $u_i$ são linearmente independentes.

Neste caso, suponha, por absurdo, que $n > m$. Note que como os $u_i$ geram $V$, então, para cada $j$, existem $a_i$ tais que
$$ v_j = \sum\limits_{i=1}^m a_i u_i$$

Esses $a_i$ são não todos nulos, porque, se todos o fossem, teríamos que $v_j = 0$, o que é impossível dado que não existe
vetor $0$ em lista de vetor LI.
Tomando um certo $a_k \neq 0$, temos que $u_k \in \text{span} \left( u_1, \dots, u_{k-1}, v_1, \dots , u_m \right)$. Daí, é fácil perceber que este span é igual a $V$. Fazendo isso para $j=2$, por exemplo, teríamos que $v_2$ é uma
combinação linear dessa lista de vetores. Mas, nesse caso, o coeficiente de pelo menos um dos $u_i$ seria $0$, uma vez que, se todos
fossem $0$, então teríamos achado que $v_2$ é uma combinação linear de outros $v$'s, um absurdo, já que eles são LI.
Dessa maneira, conseguimos ir substituindo os $u$'s até que tenhamos $V = \text{span} \left( v_1, \dots, v_n\right)$. Mas daí
$v_{n+1} \in V$ implicaria que $v_{n+1}$ é parte desse span, o que indicaria que os $v$'s são LD, absurdo!

Portanto, $m \geq n$ para esse caso, como desejado.

**Caso 2:** Os vetores $u_i$ são linearmente dependentes.

Neste caso, basta ir removendo $u$'s da lista até chegarmos no caso 1. $\blacksquare$
