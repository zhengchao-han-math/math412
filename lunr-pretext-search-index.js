var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-3",
  "level": "1",
  "url": "frontmatter-3.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " These notes have been constructed to cover the topics in Math412. While there are many excellent textbooks covering the analysis of differential and integral calculus in a single variable---the bulk of the topics for Math411, there are fewer choices covering the integration of functions and differential forms in several variables that provide more geometric discussions and motivation for some of the more abstract notions related to differential forms. This was the initial motivation for constructing these notes. But the notes have been expanded to cover aspects of analysis of a single variable which often form a bridging part with the first semester course mostly surrounding the notions of pointwise convergence and uniform convergence.  Among the most basic questions of this part are  If a sequence of continuous functions on converges pointwise to a function , what can be said about ? Is necessarily continuous, Riemann integrable, or bounded? The answers to these questions are no in general.  If a sequence of continuous functions on converges uniformly on to a function , it is known that is continuous, therefore Riemann integrable, and as . Furthermore, the space of continuous functions with as a norm is a complete normed space.  Is there an analogue in of the Bolzano-Weierstrass Theorem on that any bounded sequence has a convergent subsequence ? What if we know that a sequence in already converges pointwise on a countable and dense subset of ? Is this enough to imply that the sequence would converge pointwise or uniformly? The answer turns out to be no in general, and a positive conclusion would require equi-continuity on the sequence.     also defines a norm on . Does this norm also make a complete normed space? The answer is no, and we will discuss in some detail characterization of elements in the completion of under this and other integral norms.     We will also discuss relations between convergence in integral norms and pointwise or uniform convergence.  The issues above also have their analogues in the context of sequences and series: We know that if as for each and that if converges for each , then does not necessarily converge, and even if it does, it may not equal when the latter exists, even if converges uniformly in . The relevant condition needed here is equi-summability of the sequence of series. In the general theory of integration, these issues are usually addressed by the so-called dominated convergence theorem . The concrete contexts here reveal the central issues in addressing such convergence problems.  To prepare for our discussion, we will first briefly discuss the Riemann-Stieltjes integral at the beginning of chapter 1. We then discuss properties of elements in the completion of the space of continuous functions under integral norms adapted from an approach taken by P. Lax. Here we discuss the essential features of Lebesgue's integral on without relying on the measure theory on the so-called -algebra of measurable sets. Finally we discuss the notions of absolutely continuous functions and of bounded variation, and their relations to the extension of the Fundamental Theorem of Calculus.  Chapter 2 records the most useful properties related to the convergence of sequences and series of functions. Chapter 3 records the basic properties of power series. A large part of these two chapters is usually done in the first semester.  Chapter 4 discusses the basics of Fourier series. Because there may not be enough time to have a thorough discussion on the properties of elements in the completion of the space of continuous functions under integral norms, Chapter 4 is written in a way that can be studied without a detailed knowledge of the functions in the completion references above.  Chapters 5--7 focus on the differential and integral calculus of functions of several variables. Here my approach is very close to that of Spivak's, but I also try to provide more motivated discussions on the origin of the basic notions involved: curl and divergence of vector fields and differential of forms.  The construction of the course notes was sponsored by an 'Open and Affordable Textbooks Program' (OAT Program) award from the Rutgers University Libraries in spring 2023.  The OAT Program supports textbook affordability at Rutgers by encouraging courses to adopt educational materials that are freely available, available at a low cost (compared to similar courses), or part of the Rutgers University Libraries' electronic collections, and thereby free of charge to Rutgers University students.  "
},
{
  "id": "frontmatter-3-2",
  "level": "2",
  "url": "frontmatter-3.html#frontmatter-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "equi-continuity "
},
{
  "id": "frontmatter-3-4",
  "level": "2",
  "url": "frontmatter-3.html#frontmatter-3-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "equi-summability "
},
{
  "id": "RS-int",
  "level": "1",
  "url": "RS-int.html",
  "type": "Section",
  "number": "1.1",
  "title": "A Brief Summary of Riemann-Stieltjes Integral",
  "body": "A Brief Summary of Riemann-Stieltjes Integral  There is a need to extend the usual Riemann integral to other contexts. Let us first briefly review the main ingredients in defining the usual Riemann integral of a bounded real-valued function on an interval .   Do a partition of the interval into subintervals. This partitions the interval into a union of finitely many non-overlapping subintervals.    On each subinterval, find the infimum and supremum of . Alternatively, one may choose to evaluate at some point in each subinterval.    Multiply the infimum, respectively the supremum, (or the function value at the chosen point) by the length of each subinterval, and add them up to form the lower sum, respectively the upper sum, (or Riemann sum) of corresponding to the partition.    Take the supremum of all lower sums, and respectively the infimum of all upper sums, (or take limit of Riemann sums as the partition size goes to zero) to define the lower integral, and respectively the upper integral of on (or to examine the convergence of Riemann sums).      This procedure necessarily requires the function to be bounded, and the interval to be compact. This is because that this procedure starts with a finite sum, which requires each of the term to be finite. When either assumption fails, the lower sum and upper sum (or Riemann sum) of may not be finite for a generic choice in steps 1 and 2.   To extend the usual Riemann integral, still for a bounded function defined on , we can modify step 3 above by replacing the length of each subinterval by the increment of a given monotone increasing function on over the subinterval. This leads to the Riemann-Stieltjes integral with respect to . There are several contexts in which this extension is needed, one of which is in probability theory, and another in functional analysis.  In the context of probability, if a random variable has a probability density function , then the probability that the variable falls into is given by . Such a random variable can't have a positive probability taking on a single value. A general random variable has a cumulative distribution function . It is a non-decreasing right continuous function of ---we will also use the terminology increasing function interchangeably. The probability that the variable falls into is given by , and the probability that the variable falls into is , where is the left-hand limit of at . The Riemann-Stieltjes integral with respect to such an increasing function is a step in describing the probability of a general random variable in terms of a general integral. For example, we can use finite additivity to define Since , we use a limit process to define This allows us to define for any interval . The key property of such a probability measure  is that it is countably additive , meaning that if is a countable collection of disjoint intervals, then We will not pursue the verification of this property here, but it is relatively easy to verify it for a finite collection of disjoint intervals. Finite additivity or countable additivity defined on a suitable family of subsets of the domain of integration is the main basis for us to extend Riemann's integral to more general contexts.   In the context of functional analysis, there is a need to consider possible convergence of a sequence of linear functional on , given in the form of , where is a sequence of continuous or Riemann integrable functions on with certain bounds, say, for all . If the limit exists for every , then it could be given in terms of the Riemann-Stieltjes integral with respect to some increasing function in the sense that (to be defined below).    Summary of Riemann-Stieltjes Integral  In the following we briefly summarize the main definitions and properties of the Riemann-Stieltjes integral.  Given a monotone increasing function  on (this will be a standing assumption throughout this chapter), we can mimic the steps in defining the usual Riemann integral of a given bounded real-valued function on to define the lower sum and upper sum of with respect to a partition of , with , , , and .   In many treatments at this level, such as done by Rudin, the partition is defined as a finite set of points in the interval of integration, and there is no distinction between closed and open (or half-open) subintervals, and finite additivity is only implicitly used but not explicitly formulated. Also note that this definition allows to be a non-compact interval as long as is finite for each subinterval .    upper integral, lower integral    upper integral and lower integral of a function    Suppose that is a bounded real-valued function defined on the interval . Then its upper integral, and respectively lower integral, on with respect to is defined as , and respectively , where runs over all partitions of .  The upper integral is denoted as , while the lower integral is denoted as .    When , we write for , and for .   If is complex-valued, do you see an easy way to extend the above definitions? Also need to watch out for how the subsequent discussion is affected.    Let denote the standard tertiary Cantor set on and denote its characteristic function , which takes value on and elsewhere. Let be a partition of into intervals of equal length for some . Find and . Is there a positive lower bound of independent of ?    Basic Property of Upper and Lower Integral of a Bounded Real-valued Function  Suppose that is a bounded real-valuedfunction defined on the interval . Then     Let be two arbitrary partitions of , and be a refinement of both and . Then As a result, and       Riemann-Stieltjes integrable function    The Riemann-Stieltjes integral of   A bounded real-valued function defined on an interval is called Riemann-Stieltjes integrable with respect to , if In such a case we write on , and use for .     Riemann-Stieltjes Integrability Criterion  A bounded real-valued function defined on the interval is Riemann-Stieltjes integrable iff for any , there exists a partition of such that      A useful observation is that one often verifies criterion by separating the intervals into two groups: those intervals where is smaller than a portion of and those where it is larger, and shows that the sum over each group is less than a portion of .   Define Determine , , , , and find out if either or is in over .     If is continuous on , then on .    Note that in order to make to establish , we can use the uniform continuity of on to find a partition of such that each . It then follows that .      If is monotone on and (monotone) continuous on , then on .    Here we make use of the uniform continuity of on to find a partition of such that each . Noting that and , it then follows that .      If is bounded on and has only finitely many points of discontinuity, and is continuous at every point at which is discontinuous, then on .    Let be such that for all and be all the points of discontinuity of in (Here we are assuming and ; the proof easily adapts to the remaining cases). Using the continuity of at these points, we can find such that and Using the uniform continuity of on , we can find a partition on this finite union of closed intervals such that Adjoining with forms a partition of for which holds.    Properties of Riemann-Stieltjes Integral   Suppose that on .   and on for any scalar , and    .   and .  If on , then   For any , then on and on , and   If on , then   If is another monotone increasing function on and on , then on and       Assume that is bounded on and that and on (namely, is Riemann integrable on ). Then on iff on , and    We only outline the main ingredients. Let . For any given , first use on and to find a partition such that Use this to prove that for any choice  It follows from that Reversing the roles of and leads to By definition there exist partitions and such that and   Let be a common refinement of , then -- continue to hold with replacing , respectively. It now follows that Reversing the roles of and would lead to Since is arbitrary, we conclude that Similarly, Thus iff .    Assume that and on . Then for any      If has a finite number of jump discontinuity, then the right hand side of and need to account for contributions from these points. For example, if has a single jump discontinuity at , then   The assumption on is needed. Using a construction similar to that of a Cantor set, Volterra constructed a function (not monotone though) which had derivative everywhere in but its derivative is not Riemann integrable. Cantor's function is monotone increasing in , equals a constant in any of the middle third interval removed, therefore has derivative equal at any point of those intervals. Since Cantor's set has measure , Cantor's function has derivative equal almost everywhere in . If we can define an integral for such a function, its integral on any subinterval of must be , thus the above equality relation can't hold in such a case.   For any , , . Since , or one could think of as , and since , one would expect . This would require . For this reason, one often chooses to work with an which is right-continuous.  Since and , it is reasonable to treat as and as ; namely, and carry different meaning--- the notation of integration over a set is more precise than that of integration over a lower and upper limit.   Show that the lower Riemann-Stieltjes integrals satisfy the super-additivity property: for any bounded on , and give an example where the inequality is strict.    In the context of Lebesgue integration, the partition of the interval is done with more general measurable sets rather than subintervals of , and if one defines lower sums with respect to such partitions and define the lower integral as the supremum of the lower sums over all such partitions, then, for non-negative measurable functions , the lower integral so defined satisfies the additivity property. See (2.14) and (2.15) in Folland's Real Analysis book (2nd edition). We use the Dirichlet function , which is on rationals and on irrationals, to illustrate the difference after allowing more general partitions. If only partitions into subintervals is allowed, then each lower sum is as is on rationals so for each interval . However, if we allow partitions into measurable sets, then for any partition that includes the irrationals in as one of the partition sets, the lower sum would be at least as where is the set of rationals in . Thus the lower integral of defined with respect to measurable set partitions is at least , which is different from that defined with respect to interval partitions.    "
},
{
  "id": "RS-int-2-2",
  "level": "2",
  "url": "RS-int.html#RS-int-2-2",
  "type": "Observation",
  "number": "1.1.1",
  "title": "",
  "body": " This procedure necessarily requires the function to be bounded, and the interval to be compact. This is because that this procedure starts with a finite sum, which requires each of the term to be finite. When either assumption fails, the lower sum and upper sum (or Riemann sum) of may not be finite for a generic choice in steps 1 and 2.  "
},
{
  "id": "RS-int-2-4",
  "level": "2",
  "url": "RS-int.html#RS-int-2-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "finite additivity probability measure countably additive "
},
{
  "id": "subsec-summary-RSintegral-4",
  "level": "2",
  "url": "RS-int.html#subsec-summary-RSintegral-4",
  "type": "Remark",
  "number": "1.1.2",
  "title": "",
  "body": " In many treatments at this level, such as done by Rudin, the partition is defined as a finite set of points in the interval of integration, and there is no distinction between closed and open (or half-open) subintervals, and finite additivity is only implicitly used but not explicitly formulated. Also note that this definition allows to be a non-compact interval as long as is finite for each subinterval .  "
},
{
  "id": "def-1Dupperlower-int-def",
  "level": "2",
  "url": "RS-int.html#def-1Dupperlower-int-def",
  "type": "Definition",
  "number": "1.1.3",
  "title": "",
  "body": " upper integral, lower integral    upper integral and lower integral of a function    Suppose that is a bounded real-valued function defined on the interval . Then its upper integral, and respectively lower integral, on with respect to is defined as , and respectively , where runs over all partitions of .  The upper integral is denoted as , while the lower integral is denoted as .   "
},
{
  "id": "subsec-summary-RSintegral-8",
  "level": "2",
  "url": "RS-int.html#subsec-summary-RSintegral-8",
  "type": "Exercise",
  "number": "1.1.4",
  "title": "",
  "body": " Let denote the standard tertiary Cantor set on and denote its characteristic function , which takes value on and elsewhere. Let be a partition of into intervals of equal length for some . Find and . Is there a positive lower bound of independent of ?  "
},
{
  "id": "propos-1Dupperlower-int",
  "level": "2",
  "url": "RS-int.html#propos-1Dupperlower-int",
  "type": "Proposition",
  "number": "1.1.5",
  "title": "Basic Property of Upper and Lower Integral of a Bounded Real-valued Function.",
  "body": " Basic Property of Upper and Lower Integral of a Bounded Real-valued Function  Suppose that is a bounded real-valuedfunction defined on the interval . Then     Let be two arbitrary partitions of , and be a refinement of both and . Then As a result, and     "
},
{
  "id": "def-riemann-stieltjes-integrable",
  "level": "2",
  "url": "RS-int.html#def-riemann-stieltjes-integrable",
  "type": "Definition",
  "number": "1.1.6",
  "title": "",
  "body": " Riemann-Stieltjes integrable function    The Riemann-Stieltjes integral of   A bounded real-valued function defined on an interval is called Riemann-Stieltjes integrable with respect to , if In such a case we write on , and use for .   "
},
{
  "id": "subsec-summary-RSintegral-11",
  "level": "2",
  "url": "RS-int.html#subsec-summary-RSintegral-11",
  "type": "Theorem",
  "number": "1.1.7",
  "title": "Riemann-Stieltjes Integrability Criterion.",
  "body": " Riemann-Stieltjes Integrability Criterion  A bounded real-valued function defined on the interval is Riemann-Stieltjes integrable iff for any , there exists a partition of such that    "
},
{
  "id": "subsec-summary-RSintegral-12",
  "level": "2",
  "url": "RS-int.html#subsec-summary-RSintegral-12",
  "type": "Remark",
  "number": "1.1.8",
  "title": "",
  "body": " A useful observation is that one often verifies criterion by separating the intervals into two groups: those intervals where is smaller than a portion of and those where it is larger, and shows that the sum over each group is less than a portion of .  "
},
{
  "id": "subsec-summary-RSintegral-13",
  "level": "2",
  "url": "RS-int.html#subsec-summary-RSintegral-13",
  "type": "Exercise",
  "number": "1.1.9",
  "title": "",
  "body": "Define Determine , , , , and find out if either or is in over .  "
},
{
  "id": "subsec-summary-RSintegral-14",
  "level": "2",
  "url": "RS-int.html#subsec-summary-RSintegral-14",
  "type": "Theorem",
  "number": "1.1.10",
  "title": "",
  "body": "  If is continuous on , then on .    Note that in order to make to establish , we can use the uniform continuity of on to find a partition of such that each . It then follows that .   "
},
{
  "id": "subsec-summary-RSintegral-15",
  "level": "2",
  "url": "RS-int.html#subsec-summary-RSintegral-15",
  "type": "Theorem",
  "number": "1.1.11",
  "title": "",
  "body": "  If is monotone on and (monotone) continuous on , then on .    Here we make use of the uniform continuity of on to find a partition of such that each . Noting that and , it then follows that .   "
},
{
  "id": "subsec-summary-RSintegral-16",
  "level": "2",
  "url": "RS-int.html#subsec-summary-RSintegral-16",
  "type": "Theorem",
  "number": "1.1.12",
  "title": "",
  "body": "  If is bounded on and has only finitely many points of discontinuity, and is continuous at every point at which is discontinuous, then on .    Let be such that for all and be all the points of discontinuity of in (Here we are assuming and ; the proof easily adapts to the remaining cases). Using the continuity of at these points, we can find such that and Using the uniform continuity of on , we can find a partition on this finite union of closed intervals such that Adjoining with forms a partition of for which holds.   "
},
{
  "id": "subsec-summary-RSintegral-17",
  "level": "2",
  "url": "RS-int.html#subsec-summary-RSintegral-17",
  "type": "Theorem",
  "number": "1.1.13",
  "title": "Properties of Riemann-Stieltjes Integral.",
  "body": "Properties of Riemann-Stieltjes Integral   Suppose that on .   and on for any scalar , and    .   and .  If on , then   For any , then on and on , and   If on , then   If is another monotone increasing function on and on , then on and      "
},
{
  "id": "subsec-summary-RSintegral-18",
  "level": "2",
  "url": "RS-int.html#subsec-summary-RSintegral-18",
  "type": "Theorem",
  "number": "1.1.14",
  "title": "",
  "body": "Assume that is bounded on and that and on (namely, is Riemann integrable on ). Then on iff on , and    We only outline the main ingredients. Let . For any given , first use on and to find a partition such that Use this to prove that for any choice  It follows from that Reversing the roles of and leads to By definition there exist partitions and such that and   Let be a common refinement of , then -- continue to hold with replacing , respectively. It now follows that Reversing the roles of and would lead to Since is arbitrary, we conclude that Similarly, Thus iff .   "
},
{
  "id": "cor-ftcr",
  "level": "2",
  "url": "RS-int.html#cor-ftcr",
  "type": "Corollary",
  "number": "1.1.15",
  "title": "",
  "body": "Assume that and on . Then for any     "
},
{
  "id": "subsec-summary-RSintegral-20",
  "level": "2",
  "url": "RS-int.html#subsec-summary-RSintegral-20",
  "type": "Remark",
  "number": "1.1.16",
  "title": "",
  "body": "If has a finite number of jump discontinuity, then the right hand side of and need to account for contributions from these points. For example, if has a single jump discontinuity at , then   The assumption on is needed. Using a construction similar to that of a Cantor set, Volterra constructed a function (not monotone though) which had derivative everywhere in but its derivative is not Riemann integrable. Cantor's function is monotone increasing in , equals a constant in any of the middle third interval removed, therefore has derivative equal at any point of those intervals. Since Cantor's set has measure , Cantor's function has derivative equal almost everywhere in . If we can define an integral for such a function, its integral on any subinterval of must be , thus the above equality relation can't hold in such a case.  "
},
{
  "id": "subsec-summary-RSintegral-21",
  "level": "2",
  "url": "RS-int.html#subsec-summary-RSintegral-21",
  "type": "Remark",
  "number": "1.1.17",
  "title": "",
  "body": "For any , , . Since , or one could think of as , and since , one would expect . This would require . For this reason, one often chooses to work with an which is right-continuous.  Since and , it is reasonable to treat as and as ; namely, and carry different meaning--- the notation of integration over a set is more precise than that of integration over a lower and upper limit.  "
},
{
  "id": "subsec-summary-RSintegral-22",
  "level": "2",
  "url": "RS-int.html#subsec-summary-RSintegral-22",
  "type": "Exercise",
  "number": "1.1.18",
  "title": "",
  "body": "Show that the lower Riemann-Stieltjes integrals satisfy the super-additivity property: for any bounded on , and give an example where the inequality is strict.  "
},
{
  "id": "subsec-summary-RSintegral-23",
  "level": "2",
  "url": "RS-int.html#subsec-summary-RSintegral-23",
  "type": "Remark",
  "number": "1.1.19",
  "title": "",
  "body": " In the context of Lebesgue integration, the partition of the interval is done with more general measurable sets rather than subintervals of , and if one defines lower sums with respect to such partitions and define the lower integral as the supremum of the lower sums over all such partitions, then, for non-negative measurable functions , the lower integral so defined satisfies the additivity property. See (2.14) and (2.15) in Folland's Real Analysis book (2nd edition). We use the Dirichlet function , which is on rationals and on irrationals, to illustrate the difference after allowing more general partitions. If only partitions into subintervals is allowed, then each lower sum is as is on rationals so for each interval . However, if we allow partitions into measurable sets, then for any partition that includes the irrationals in as one of the partition sets, the lower sum would be at least as where is the set of rationals in . Thus the lower integral of defined with respect to measurable set partitions is at least , which is different from that defined with respect to interval partitions.  "
},
{
  "id": "chp-int",
  "level": "1",
  "url": "chp-int.html",
  "type": "Section",
  "number": "1.2",
  "title": "The Completion of the Space of Continuous Functions under Integral Norms",
  "body": "The Completion of the Space of Continuous Functions under Integral Norms  The space of continuous functions on a closed interval is a closed metric space in theuniform norm . However, it is not complete in theintegral norms for any . The completion of under these integral norms leads to the important classes of functions called - integrable functions , which are more general than continuous functions but still have well-defined integrals. Such functions play important roles in analysis and its applications.  We sketch below some main properties of the completion of the space of continuous functions under integral norms. The main line of approach is adapted from the following article by P. Lax, Rethinking the Lebesgue Integral , The American Mathematical Monthly, Dec., 2009, Vol. 116, No. 10 (Dec., 2009), pp. 863-881. Although the discussion can be done with respect to the Riemann-Stieltjes integral, we limit our discussion to the standard Riemann integral.  The main feature of this discussion is to establish the important property that the class of integrable functions is closed under reasonable sequential limit while avoiding the discussion of the so called -algebra of measurable sets. Any set can be identified by its characteristic function, and the union and intersection of a finite number or countably many sets can also be represented in terms of algebraic sum or limits of the characteristic functions of the relevant sets, so when a sequence of characteristic functions has a limit in the integral sense, it gives information about the limit of the corresponding sets.  For any , let denote the completion of in thenorm . From the abstract completion process, each element is an equivalence class of sequences in which is Cauchy in the -norm. We would like to address the following questions    Does each equivalence class of Cauchy sequences in in the -norm associate to a pointwise-defined function on ?  Does each equivalence class of Cauchy sequences in in the -norm associate to a well-defined integral? What usual properties of integrals are preserved?  Establish criteria for other limiting process of functions in or , e.g., pointwise limit, that result in a limit in .    It turns out that are different spaces for different values of , even though they are defined through a completion process starting from the same space . Their differences lie in the different norms used.  An elementary observation  Suppose that is a Cauchy sequence in in the -norm. Then for , is a Cauchy sequence in ; and for any , is a Cauchy sequence in . Furthermore, and remain the same if is replaced by an equivalent Cauchy sequence.   These properties are simple consequences of the triangle inequalities:   As a result, if we denote by the equivalence class of , it makes sense to define Any defines a Cauchy sequence in and as defined through the limiting process above equals the definition through Riemann's integral.  It also follows routinely that if is a finite collection of disjoint subintervals of , then is well defined; the intervals can also be replaced by open or half-open intervals. Furthermore, if , then for any scalars ,   Any open set of is a union of at most countably many disjoint open intervals . For any and any open subset of , the integrals and have clearly defined meanings as the (absolutely convergent) sum of the integrals on each constitutive open interval, with , the length of .   Uniform Absolute Continuity of A Sequence of Integrals in   The -integrals of a sequence of functions in are said to be uniformly absolutely continuous on if for any , there exists a such that for any open subset of with its length ,     Uniform Absolute Continuity of the Integrals of a Sequence in which is Cauchy in the norm  The -integrals of any Cauchy sequence in in the -norm are uniformly absolutely continuous on .    For the given , there exists some such that for all , . Since for , there exists a common such that for all and , therefore, there exists such that for any open subset of with its length , we have Now for , the triangle inequality continues to hold for integrals on , which implies that from which our conclusion follows.    In the context of , suppose that the open set is decomposed as the union of at most countably many disjoint open intervals: , and set . Prove that This allows to define as , given by .  As a consequence, prove the absolute continuity of the integral of , namely, for any and for any , there exists a such that for any open subset of with its length ,      Construct for such that exists for each (the convergence can even be uniform in ) and     One can set for and for . If one thinks of as the integral of a function defined on , then an analog of the notion of uniform absolute continuity is needed to justify the interchange of limit and summation, and that notion would require, for any , the existence of some such that The example above fails to satisfy this requirement.    Construct a sequence of non-negative functions in such that for each but . Verify that the integrals of this sequence fail to be uniformly absolutely continuous on .   Negligible Set   A point set is called negligible if it can be covered by an open set of arbitrarily small volume, namely, for any , there exists an open cover of such that .    The notion of negligible set here is a special case in the context of Lebesgue measure on of the notion of a set of measure . Note that the union of at most countable number of negligible sets is still negligible.  When two functions are equal except on a negligible set, we use the customary language that they are equal .  Realization of a Cauchy Sequence in   A function defined on is said to be a realization of if there exists a Cauchy sequence of continuous functions in in the equivalence class of which converges a.e to :     Note that if is any interval of finite length (either open or closed) in , then for any , one can find a continuous function with support in the interior of , such that . This shows that the characteristic function of is a realization of a function in , namely, it is a function in . The same applies to the linear combination of a finite number of such characteristic functions.  Since the Riemann sum of a function is the integral of such a linear combination of a finite number of such characteristic functions. and any Riemann integrable function on can be approximated in by its Riemann sums, we conclude that any Riemann integrable function is a realization of some function in .  A similar argument shows that the characteristic function of any open set of with finite length is a realization of some function in .  Realization of Elements of     Any Cauchy sequence in in the -norm has a subsequence which converges pointwise on . Furthermore, for any , there exists an open set with such that converges uniformly over .   If and are two equivalent Cauchy sequences in in the -norm such that both and exist , then  .  As a result, any in , namely, an equivalence class of Cauchy sequences in in the -norm, has an pointwise defined realization defined on . We will denote such a realization by . In particular, if in is such that , then  on .   If and are two Cauchy sequences in in the -norm such that  , then and are equivalent Cauchy sequences in .     Any Cauchy sequence in in the -norm has a subsequence, still denoted as , such that where are such that converges.  Define Then is open and it follows from that .  Note that is open and , as . Here, the 's may not be disjoint, but this subadditivity property used above holds. Define the set by Note that is the set of points that belong to infinitely many 's, and is then the set of points that belong to at most a finite number of 's. Since as , is negligible, and for any , there exists some such that , which makes a Cauchy sequence in , therefore exists. Furthermore, for any , there exists some such that . On the complement of , for all , implying that converges uniformly on this set.  For (ii), we can use the equivalent Cauchy sequences and to construct a new Cauchy sequence, say, with as the -th term and as the -th term, then appeal to the proof of (i), making sure that in selecting the subsequence, infinitely many terms from both sequences are selected. This subsequence, selected from two convergent sequences, converges , which shows that  .  For (iii), define , then is a Cauchy sequence in in the -norm such that  . We now show that in . We argue by contradiction: suppose not, then there exists some and a subsequence of , still denoted as , such that for all .  For any , first apply to to find such that for any open set in with , we have . Next apply the proof for (i) to to find a subsequence of , still denoted as , a limit function  defined, and an open set in with such that  and uniformly in . Since it is assumed that  , we must have  . Thus there exists such that for all and .  We would like to estimate by . But in the Riemann integral setting, integration over an arbitrary closed set is not defined. We complete the argument in the following way. For any , since , we can find a partition such that For any interval that has non-empty intersection with , we see that ; the remaining subintervals are contained in , and the lower Riemann sum over such intervals for any . It then follows that for any , Choose at the beginning such that , this then shows a contradiction with our assumption that for all . Thus we have shown that as .    The second part of (i) of is usually called Egorov's Theorem. As a consequence of it, for any realization of some and any , there exists a closed set of with such that the restriction of on is continuous. Note that this is not saying that is continuous at every point of as a function on . Furthermore, for any and any , one can find a continuous approximation in the sense that exists an open set with such that Here is defined through the limiting process instead of the Riemann integral for a general .   Let . Extend to be outside of . Prove that as .   Let . Prove that is a continuous function of .   Let . Extend to be outside of and define for small. Prove that as .   is closed under taking absolute values and maximums   If in is a Cauchy sequence in -norm, representing in , then in is a Cauchy sequence in -norm whose realization is given by .  If , then and .    Rapidly Convergent Sequence in  Let be a sequence of elements in converging rapidly in the sense where converges. Then there exists a unique such that and  as .    For each there exists some and an open set with such that Then the set is negligible, as as , and for any , there exists some such that . This implies that satisfies Then applied to implies that there exists a unique such that We can then conclude our proof by appealing to the triangle inequalities.     Nonnegative Elements of   An element is said to be non-negative if its realization satisfies  on .    Characterization of Nonnegative Elements of   An element is non-negative iff there exists a Cauchy sequence representing such that satisfies as .  As a consequence, if is non-negative, then there exists a Cauchy sequence in representing such that as and . Since is defined through a limiting process via an approximate sequence not via a Riemann sum using , the sign of does not automatically follow from  .    Suppose that is a sequence in , Cauchy in -norm, representing such that as . Define , which is identified as . Then is a sequence in , Cauchy in -norm. applied to both and implies that there exists a subsequence, still indexed by to avoid extra indices, such that exists , which is evidently  , and  (refer to (ii) of ). Therefore   Conversely, suppose that  and is a sequence in , Cauchy in the norm representing and  . Then we must have  . Noting that we see that is also a sequence in , Cauchy in the norm. Then the proof of of shows that in norm, and as .    Since a function in may not be bounded, we may no longer conclude that whenever . However we have the following      Suppose that and for some such that . Then and   Suppose that and that there exists some such that  . Then and      For (a), take such that in and such that in . We show that is Cauchy in and that is a realization of this sequence.  Note that there exists some such that for all  Then Since and as , we can conclude that as . Since  and  , it follows that  , making as a realization of the Cauchy sequence .  Finally, using and as well as it follows from the Hlder's inequality that the same inequality holds for and .  For (b), the key is how the assumption  can be reflected in a Cauchy sequence from approximating in . Let be a Cauchy sequence for . Define We claim that is a Cauchy sequence equivalent to .  First, observing that holds point wise. It then follows that is a Cauchy sequence in . Next, similar to the proof of , we see that and that in , as and in ; similarly, in . This shows that is equivalent to .  Now if is a Cauchy sequence for in , then we claim that is a Cauchy sequence for in . This is because   For any , first find such that for all , . Note that there exists some such that for all , and that there exists some such that for any open set with , we have for all . For such a , we can find some open set with such that a subsequence of , still denoted as , satisfies uniformly on . Therefore, we can find some such that for all , we have for all , which leads to But This leads to     Monotone Convergence Theorem   Suppose that is a sequence in such that  for all and that is bounded. Then the defined (it could take value ) is the realization of some , and as .    First, implies that , so the sequence of scalars as a bounded, monotone increasing sequence is convergent. Since for , , it follows that is a Cauchy sequence in . Then by it has a subsequence converging to some in , and to  pointwise. This identifies with  pointwise, showing that . Since the full sequence is a Cauchy sequence in , we show that in as follows.  For any , there exists such that for all , ; also, there exists such that whenever , . Let . Then when , we can find such that so proving that in .    Suppose that is a sequence of open set such that for all and is negligible and that , then as .    Note that and that except on . It follows that and that except on .  Then implies that from which we conclude that .    The assumption that (it suffices that some ) cannot be removed, for is a decreasing sequence of open set with is certainly negligible, but does not converge to .  Suppose that is a sequence in such that  for all and that is bounded. Prove that the defined is the realization of some , and as .   Suppose that is a sequence in such that  for all and that is bounded independent of . Prove that is the realization of some of element in . Denoting it as , prove that   Fatou Theorem  Suppose that is a sequence in such that  for all and that is finite. Then and     Define . Then and  . Then implies that with . Since for any , , it follows that , therefore, .  Now and is bounded under our assumption. Then implies and which equals .     Construct a sequence in such that  for all , and    Dominated Convergence Theorem   Suppose that is a sequence in such that exists , and there exists a such that  . Then and in . As a consequence, as .    Define . Then and  . and are no longer necessarily non-negative, but  . Then are non-negative functions in , monotone in . Therefore, , with from which it follows that , with Note that it follows from  that  as . Therefore by  .  We can now apply Fatou Theorem to the sequence of non-negative functions to imply Since , it follows that .   Second proof in special cases  We provide another proof when each of . Let be a negligible set such that on . Recall that Therefore, and each is negligible. Since we have not developed the theory of measurable sets and measure, it's not easy to make use of this information.  Under the assumption that each , we can modify the above relation as and each is open. Now that is negligible, it follows from that as . Using , it follows that, for any , there exists some that for any open set in with , we have . It then follows that and , therefore . It further follows that, there exists such that , from which we deduce that the open set satisfies and in we have for . This shows that converges (to ) uniformly on .  It now follows that, for the above, , and using converges (to ) uniformly on , we argue that . This shows that .    Suppose that is a sequence in and that is convergent. Prove that is the realization of some of element in . Denoting it as , prove that   "
},
{
  "id": "chp-int-2",
  "level": "2",
  "url": "chp-int.html#chp-int-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "integrable functions "
},
{
  "id": "def-uniform-abs-contin",
  "level": "2",
  "url": "chp-int.html#def-uniform-abs-contin",
  "type": "Definition",
  "number": "1.2.1",
  "title": "Uniform Absolute Continuity of A Sequence of Integrals in <span class=\"process-math\">\\(L^{p}[a, b]\\)<\/span>.",
  "body": " Uniform Absolute Continuity of A Sequence of Integrals in   The -integrals of a sequence of functions in are said to be uniformly absolutely continuous on if for any , there exists a such that for any open subset of with its length ,    "
},
{
  "id": "uniform-abs-contin",
  "level": "2",
  "url": "chp-int.html#uniform-abs-contin",
  "type": "Proposition",
  "number": "1.2.2",
  "title": "Uniform Absolute Continuity of the Integrals of a  Sequence in <span class=\"process-math\">\\(C[a, b]\\)<\/span> which is Cauchy in the <span class=\"process-math\">\\(L^{p}[a, b]\\)<\/span> norm.",
  "body": "Uniform Absolute Continuity of the Integrals of a Sequence in which is Cauchy in the norm  The -integrals of any Cauchy sequence in in the -norm are uniformly absolutely continuous on .    For the given , there exists some such that for all , . Since for , there exists a common such that for all and , therefore, there exists such that for any open subset of with its length , we have Now for , the triangle inequality continues to hold for integrals on , which implies that from which our conclusion follows.   "
},
{
  "id": "exe-abc",
  "level": "2",
  "url": "chp-int.html#exe-abc",
  "type": "Exercise",
  "number": "1.2.3",
  "title": "",
  "body": "In the context of , suppose that the open set is decomposed as the union of at most countably many disjoint open intervals: , and set . Prove that This allows to define as , given by .  As a consequence, prove the absolute continuity of the integral of , namely, for any and for any , there exists a such that for any open subset of with its length ,   "
},
{
  "id": "chp-int-16",
  "level": "2",
  "url": "chp-int.html#chp-int-16",
  "type": "Exercise",
  "number": "1.2.4",
  "title": "",
  "body": "  Construct for such that exists for each (the convergence can even be uniform in ) and     One can set for and for . If one thinks of as the integral of a function defined on , then an analog of the notion of uniform absolute continuity is needed to justify the interchange of limit and summation, and that notion would require, for any , the existence of some such that The example above fails to satisfy this requirement.   "
},
{
  "id": "chp-int-17",
  "level": "2",
  "url": "chp-int.html#chp-int-17",
  "type": "Exercise",
  "number": "1.2.5",
  "title": "",
  "body": "Construct a sequence of non-negative functions in such that for each but . Verify that the integrals of this sequence fail to be uniformly absolutely continuous on .  "
},
{
  "id": "chp-int-18",
  "level": "2",
  "url": "chp-int.html#chp-int-18",
  "type": "Definition",
  "number": "1.2.6",
  "title": "Negligible Set.",
  "body": "Negligible Set   A point set is called negligible if it can be covered by an open set of arbitrarily small volume, namely, for any , there exists an open cover of such that .   "
},
{
  "id": "chp-int-21",
  "level": "2",
  "url": "chp-int.html#chp-int-21",
  "type": "Definition",
  "number": "1.2.7",
  "title": "Realization of a Cauchy Sequence in <span class=\"process-math\">\\(L^{p}[a, b]\\)<\/span>.",
  "body": "Realization of a Cauchy Sequence in   A function defined on is said to be a realization of if there exists a Cauchy sequence of continuous functions in in the equivalence class of which converges a.e to :    "
},
{
  "id": "lprealization",
  "level": "2",
  "url": "chp-int.html#lprealization",
  "type": "Proposition",
  "number": "1.2.8",
  "title": "Realization of Elements of <span class=\"process-math\">\\(L^{p}[a, b]\\)<\/span>.",
  "body": "Realization of Elements of     Any Cauchy sequence in in the -norm has a subsequence which converges pointwise on . Furthermore, for any , there exists an open set with such that converges uniformly over .   If and are two equivalent Cauchy sequences in in the -norm such that both and exist , then  .  As a result, any in , namely, an equivalence class of Cauchy sequences in in the -norm, has an pointwise defined realization defined on . We will denote such a realization by . In particular, if in is such that , then  on .   If and are two Cauchy sequences in in the -norm such that  , then and are equivalent Cauchy sequences in .     Any Cauchy sequence in in the -norm has a subsequence, still denoted as , such that where are such that converges.  Define Then is open and it follows from that .  Note that is open and , as . Here, the 's may not be disjoint, but this subadditivity property used above holds. Define the set by Note that is the set of points that belong to infinitely many 's, and is then the set of points that belong to at most a finite number of 's. Since as , is negligible, and for any , there exists some such that , which makes a Cauchy sequence in , therefore exists. Furthermore, for any , there exists some such that . On the complement of , for all , implying that converges uniformly on this set.  For (ii), we can use the equivalent Cauchy sequences and to construct a new Cauchy sequence, say, with as the -th term and as the -th term, then appeal to the proof of (i), making sure that in selecting the subsequence, infinitely many terms from both sequences are selected. This subsequence, selected from two convergent sequences, converges , which shows that  .  For (iii), define , then is a Cauchy sequence in in the -norm such that  . We now show that in . We argue by contradiction: suppose not, then there exists some and a subsequence of , still denoted as , such that for all .  For any , first apply to to find such that for any open set in with , we have . Next apply the proof for (i) to to find a subsequence of , still denoted as , a limit function  defined, and an open set in with such that  and uniformly in . Since it is assumed that  , we must have  . Thus there exists such that for all and .  We would like to estimate by . But in the Riemann integral setting, integration over an arbitrary closed set is not defined. We complete the argument in the following way. For any , since , we can find a partition such that For any interval that has non-empty intersection with , we see that ; the remaining subintervals are contained in , and the lower Riemann sum over such intervals for any . It then follows that for any , Choose at the beginning such that , this then shows a contradiction with our assumption that for all . Thus we have shown that as .   "
},
{
  "id": "chp-int-26",
  "level": "2",
  "url": "chp-int.html#chp-int-26",
  "type": "Remark",
  "number": "1.2.9",
  "title": "",
  "body": "The second part of (i) of is usually called Egorov's Theorem. As a consequence of it, for any realization of some and any , there exists a closed set of with such that the restriction of on is continuous. Note that this is not saying that is continuous at every point of as a function on . Furthermore, for any and any , one can find a continuous approximation in the sense that exists an open set with such that Here is defined through the limiting process instead of the Riemann integral for a general .  "
},
{
  "id": "chp-int-27",
  "level": "2",
  "url": "chp-int.html#chp-int-27",
  "type": "Exercise",
  "number": "1.2.10",
  "title": "",
  "body": "Let . Extend to be outside of . Prove that as .  "
},
{
  "id": "chp-int-28",
  "level": "2",
  "url": "chp-int.html#chp-int-28",
  "type": "Exercise",
  "number": "1.2.11",
  "title": "",
  "body": "Let . Prove that is a continuous function of .  "
},
{
  "id": "exe-avcn",
  "level": "2",
  "url": "chp-int.html#exe-avcn",
  "type": "Exercise",
  "number": "1.2.12",
  "title": "",
  "body": "Let . Extend to be outside of and define for small. Prove that as .  "
},
{
  "id": "chp-int-30",
  "level": "2",
  "url": "chp-int.html#chp-int-30",
  "type": "Corollary",
  "number": "1.2.13",
  "title": "<span class=\"process-math\">\\(L^{p}[a, b]\\)<\/span> is closed under taking absolute values and maximums.",
  "body": "is closed under taking absolute values and maximums   If in is a Cauchy sequence in -norm, representing in , then in is a Cauchy sequence in -norm whose realization is given by .  If , then and .   "
},
{
  "id": "rcsthm",
  "level": "2",
  "url": "chp-int.html#rcsthm",
  "type": "Proposition",
  "number": "1.2.14",
  "title": "Rapidly Convergent Sequence in <span class=\"process-math\">\\(L^{p}[a, b]\\)<\/span>.",
  "body": "Rapidly Convergent Sequence in  Let be a sequence of elements in converging rapidly in the sense where converges. Then there exists a unique such that and  as .    For each there exists some and an open set with such that Then the set is negligible, as as , and for any , there exists some such that . This implies that satisfies Then applied to implies that there exists a unique such that We can then conclude our proof by appealing to the triangle inequalities.   "
},
{
  "id": "chp-int-32",
  "level": "2",
  "url": "chp-int.html#chp-int-32",
  "type": "Definition",
  "number": "1.2.15",
  "title": "Nonnegative Elements of <span class=\"process-math\">\\(L^{p}[a, b]\\)<\/span>.",
  "body": " Nonnegative Elements of   An element is said to be non-negative if its realization satisfies  on .   "
},
{
  "id": "poselem",
  "level": "2",
  "url": "chp-int.html#poselem",
  "type": "Proposition",
  "number": "1.2.16",
  "title": "Characterization of Nonnegative Elements of <span class=\"process-math\">\\(L^{p}[a, b]\\)<\/span>.",
  "body": "Characterization of Nonnegative Elements of   An element is non-negative iff there exists a Cauchy sequence representing such that satisfies as .  As a consequence, if is non-negative, then there exists a Cauchy sequence in representing such that as and . Since is defined through a limiting process via an approximate sequence not via a Riemann sum using , the sign of does not automatically follow from  .    Suppose that is a sequence in , Cauchy in -norm, representing such that as . Define , which is identified as . Then is a sequence in , Cauchy in -norm. applied to both and implies that there exists a subsequence, still indexed by to avoid extra indices, such that exists , which is evidently  , and  (refer to (ii) of ). Therefore   Conversely, suppose that  and is a sequence in , Cauchy in the norm representing and  . Then we must have  . Noting that we see that is also a sequence in , Cauchy in the norm. Then the proof of of shows that in norm, and as .   "
},
{
  "id": "prop-prod",
  "level": "2",
  "url": "chp-int.html#prop-prod",
  "type": "Proposition",
  "number": "1.2.17",
  "title": "",
  "body": "    Suppose that and for some such that . Then and   Suppose that and that there exists some such that  . Then and      For (a), take such that in and such that in . We show that is Cauchy in and that is a realization of this sequence.  Note that there exists some such that for all  Then Since and as , we can conclude that as . Since  and  , it follows that  , making as a realization of the Cauchy sequence .  Finally, using and as well as it follows from the Hlder's inequality that the same inequality holds for and .  For (b), the key is how the assumption  can be reflected in a Cauchy sequence from approximating in . Let be a Cauchy sequence for . Define We claim that is a Cauchy sequence equivalent to .  First, observing that holds point wise. It then follows that is a Cauchy sequence in . Next, similar to the proof of , we see that and that in , as and in ; similarly, in . This shows that is equivalent to .  Now if is a Cauchy sequence for in , then we claim that is a Cauchy sequence for in . This is because   For any , first find such that for all , . Note that there exists some such that for all , and that there exists some such that for any open set with , we have for all . For such a , we can find some open set with such that a subsequence of , still denoted as , satisfies uniformly on . Therefore, we can find some such that for all , we have for all , which leads to But This leads to    "
},
{
  "id": "MCT",
  "level": "2",
  "url": "chp-int.html#MCT",
  "type": "Theorem",
  "number": "1.2.18",
  "title": "Monotone Convergence Theorem.",
  "body": "Monotone Convergence Theorem   Suppose that is a sequence in such that  for all and that is bounded. Then the defined (it could take value ) is the realization of some , and as .    First, implies that , so the sequence of scalars as a bounded, monotone increasing sequence is convergent. Since for , , it follows that is a Cauchy sequence in . Then by it has a subsequence converging to some in , and to  pointwise. This identifies with  pointwise, showing that . Since the full sequence is a Cauchy sequence in , we show that in as follows.  For any , there exists such that for all , ; also, there exists such that whenever , . Let . Then when , we can find such that so proving that in .   "
},
{
  "id": "cor-desc-open",
  "level": "2",
  "url": "chp-int.html#cor-desc-open",
  "type": "Corollary",
  "number": "1.2.19",
  "title": "",
  "body": "Suppose that is a sequence of open set such that for all and is negligible and that , then as .    Note that and that except on . It follows that and that except on .  Then implies that from which we conclude that .   "
},
{
  "id": "chp-int-39",
  "level": "2",
  "url": "chp-int.html#chp-int-39",
  "type": "Exercise",
  "number": "1.2.20",
  "title": "",
  "body": "Suppose that is a sequence in such that  for all and that is bounded. Prove that the defined is the realization of some , and as .  "
},
{
  "id": "chp-int-40",
  "level": "2",
  "url": "chp-int.html#chp-int-40",
  "type": "Exercise",
  "number": "1.2.21",
  "title": "",
  "body": "Suppose that is a sequence in such that  for all and that is bounded independent of . Prove that is the realization of some of element in . Denoting it as , prove that  "
},
{
  "id": "fatou",
  "level": "2",
  "url": "chp-int.html#fatou",
  "type": "Theorem",
  "number": "1.2.22",
  "title": "Fatou Theorem.",
  "body": "Fatou Theorem  Suppose that is a sequence in such that  for all and that is finite. Then and     Define . Then and  . Then implies that with . Since for any , , it follows that , therefore, .  Now and is bounded under our assumption. Then implies and which equals .   "
},
{
  "id": "chp-int-42",
  "level": "2",
  "url": "chp-int.html#chp-int-42",
  "type": "Exercise",
  "number": "1.2.23",
  "title": "",
  "body": " Construct a sequence in such that  for all , and   "
},
{
  "id": "DCT",
  "level": "2",
  "url": "chp-int.html#DCT",
  "type": "Theorem",
  "number": "1.2.24",
  "title": "Dominated Convergence Theorem.",
  "body": "Dominated Convergence Theorem   Suppose that is a sequence in such that exists , and there exists a such that  . Then and in . As a consequence, as .    Define . Then and  . and are no longer necessarily non-negative, but  . Then are non-negative functions in , monotone in . Therefore, , with from which it follows that , with Note that it follows from  that  as . Therefore by  .  We can now apply Fatou Theorem to the sequence of non-negative functions to imply Since , it follows that .   Second proof in special cases  We provide another proof when each of . Let be a negligible set such that on . Recall that Therefore, and each is negligible. Since we have not developed the theory of measurable sets and measure, it's not easy to make use of this information.  Under the assumption that each , we can modify the above relation as and each is open. Now that is negligible, it follows from that as . Using , it follows that, for any , there exists some that for any open set in with , we have . It then follows that and , therefore . It further follows that, there exists such that , from which we deduce that the open set satisfies and in we have for . This shows that converges (to ) uniformly on .  It now follows that, for the above, , and using converges (to ) uniformly on , we argue that . This shows that .   "
},
{
  "id": "chp-int-44",
  "level": "2",
  "url": "chp-int.html#chp-int-44",
  "type": "Exercise",
  "number": "1.2.25",
  "title": "",
  "body": "Suppose that is a sequence in and that is convergent. Prove that is the realization of some of element in . Denoting it as , prove that  "
},
{
  "id": "chp-lpintegral-4",
  "level": "1",
  "url": "chp-lpintegral-4.html",
  "type": "Section",
  "number": "1.3",
  "title": "The Space of Riemann Integrable Functions",
  "body": "The Space of Riemann Integrable Functions   Introduction  Here we discuss the relation between the space of Riemann integrable functions on and , the completion of under the norm.   We first make the following definition.   oscillation of a function    The oscillation of a function over a set . The oscillation of a function at a point .    Let be defined on an interval . The oscillation of a function over the set is defined to be and is denoted as .  The oscillation of a function at a point is defined to be and is denoted as . Here is the open interval of radius centered at .    Upper Semi-continuity of  The function is upper semi-continuous. As a consequence, for any real number , the set is closed.   For any real number , if , then there exists some such that . For any , we observe that . Thus , proving that the latter is open.    Note that namely, is a countable union of of the closed sets .   Riemann Integrability Criterion in terms of the Oscillation of the Integrand   A bounded real-valued function defined on the interval is Riemann integrable iff   In particular, if is continuous on the closed interval , then is Riemann integrable on .    Suppose that is Riemann integrable on and that is given. Then the Darboux integrability criterion gives us a partition such that which implies that   Suppose that holds. Then and Since is arbitrary, it follows that , and is Riemann integrable on .  Finally, suppose that is continuous on the closed interval , then it is uniformly continuous on . For any given , there exists such that for any partition of with , we have for all . It then follows that proving the Riemann integrability of on .     Set of content   A set is said to have content , if for any , there exists a finite cover of by intervals such that     We are now ready to formulate the following theorem.   Riemann Integrability in terms of the Set of Discontinuity   A bounded function on a bounded closed interval is Riemann integrable on iff its set of discontinuity is negligible.    We will use for the only if part.  Suppose that is Riemann integrable on . For each , we will prove that the closed set is a set of content .  Given any . There exists a partition of such that The intervals in are divided into two subgroups: the subgroup consisting those such that , and the subgroup consisting those such that . Then it follows from that   We now claim that This will show that is a set of content .  If the claim were not true, there would exist some . Thus . Since the complement of is open, there exists some interval . If for some , it would force , which would be a contradiction. So can only be on the boundary of one or more . We can choose small enough such that any and will be in one such common interval. Therefore, . This would lead to , contradicting .  For the if part, take any , then choose such that . The closed set is a subset of the negligible set , so can be covered by a union of a finite number of intervals such that . Every point has an open interval such that . The closed set can be covered by the union of a finite number of such intervals and one can find a fine enough partition of such that if any contains a point of , then ; and the union of those has their sum of lengths . This would give which proves that satisfies the Riemann integrability criterion.    Approximation Property of Functions in  Any Riemann integrable function lies in for any , and for any there exists a continuous function and an open set in such that , on , and .   Since the set of discontinuity of is negligible, for any there exists an open set in such that it covers and . For every point in the closed set , , so is a continuous function on this closed set. It can be extended to a continuous function on such that . Then this satisfies our requirements.    Suppose that and is negligible. Is it true that any modification of on into a bounded function will remain to have a negligible set of discontinuity and remain Riemann integrable on ?   Suppose that is a closed negligible subset of . Prove that the set of discontinuity of the characteristic function is precisely .   Suppose that is the union of at most countably many closed negligible subsets of . Prove that there is a bounded function defined on whose set of discontinuity is precisely .   "
},
{
  "id": "def-1Dosc",
  "level": "2",
  "url": "chp-lpintegral-4.html#def-1Dosc",
  "type": "Definition",
  "number": "1.3.1",
  "title": "",
  "body": " oscillation of a function    The oscillation of a function over a set . The oscillation of a function at a point .    Let be defined on an interval . The oscillation of a function over the set is defined to be and is denoted as .  The oscillation of a function at a point is defined to be and is denoted as . Here is the open interval of radius centered at .   "
},
{
  "id": "chp-lpintegral-4-5",
  "level": "2",
  "url": "chp-lpintegral-4.html#chp-lpintegral-4-5",
  "type": "Proposition",
  "number": "1.3.2",
  "title": "Upper Semi-continuity of <span class=\"process-math\">\\(\\osc(f)(x)\\)<\/span>.",
  "body": "Upper Semi-continuity of  The function is upper semi-continuous. As a consequence, for any real number , the set is closed.   For any real number , if , then there exists some such that . For any , we observe that . Thus , proving that the latter is open.   "
},
{
  "id": "thm-1DRiemann-integrability-oscillation",
  "level": "2",
  "url": "chp-lpintegral-4.html#thm-1DRiemann-integrability-oscillation",
  "type": "Theorem",
  "number": "1.3.3",
  "title": "Riemann Integrability Criterion in terms of the Oscillation of the Integrand.",
  "body": " Riemann Integrability Criterion in terms of the Oscillation of the Integrand   A bounded real-valued function defined on the interval is Riemann integrable iff   In particular, if is continuous on the closed interval , then is Riemann integrable on .    Suppose that is Riemann integrable on and that is given. Then the Darboux integrability criterion gives us a partition such that which implies that   Suppose that holds. Then and Since is arbitrary, it follows that , and is Riemann integrable on .  Finally, suppose that is continuous on the closed interval , then it is uniformly continuous on . For any given , there exists such that for any partition of with , we have for all . It then follows that proving the Riemann integrability of on .   "
},
{
  "id": "def-content0",
  "level": "2",
  "url": "chp-lpintegral-4.html#def-content0",
  "type": "Definition",
  "number": "1.3.4",
  "title": "",
  "body": " Set of content   A set is said to have content , if for any , there exists a finite cover of by intervals such that    "
},
{
  "id": "thm-1Dintegrability-osc0",
  "level": "2",
  "url": "chp-lpintegral-4.html#thm-1Dintegrability-osc0",
  "type": "Theorem",
  "number": "1.3.5",
  "title": "Riemann Integrability in terms of the Set of Discontinuity.",
  "body": " Riemann Integrability in terms of the Set of Discontinuity   A bounded function on a bounded closed interval is Riemann integrable on iff its set of discontinuity is negligible.    We will use for the only if part.  Suppose that is Riemann integrable on . For each , we will prove that the closed set is a set of content .  Given any . There exists a partition of such that The intervals in are divided into two subgroups: the subgroup consisting those such that , and the subgroup consisting those such that . Then it follows from that   We now claim that This will show that is a set of content .  If the claim were not true, there would exist some . Thus . Since the complement of is open, there exists some interval . If for some , it would force , which would be a contradiction. So can only be on the boundary of one or more . We can choose small enough such that any and will be in one such common interval. Therefore, . This would lead to , contradicting .  For the if part, take any , then choose such that . The closed set is a subset of the negligible set , so can be covered by a union of a finite number of intervals such that . Every point has an open interval such that . The closed set can be covered by the union of a finite number of such intervals and one can find a fine enough partition of such that if any contains a point of , then ; and the union of those has their sum of lengths . This would give which proves that satisfies the Riemann integrability criterion.   "
},
{
  "id": "chp-lpintegral-4-11",
  "level": "2",
  "url": "chp-lpintegral-4.html#chp-lpintegral-4-11",
  "type": "Corollary",
  "number": "1.3.6",
  "title": "Approximation Property of Functions in <span class=\"process-math\">\\(\\cR[a, b]\\)<\/span>.",
  "body": "Approximation Property of Functions in  Any Riemann integrable function lies in for any , and for any there exists a continuous function and an open set in such that , on , and .   Since the set of discontinuity of is negligible, for any there exists an open set in such that it covers and . For every point in the closed set , , so is a continuous function on this closed set. It can be extended to a continuous function on such that . Then this satisfies our requirements.   "
},
{
  "id": "chp-lpintegral-4-12",
  "level": "2",
  "url": "chp-lpintegral-4.html#chp-lpintegral-4-12",
  "type": "Exercise",
  "number": "1.3.7",
  "title": "",
  "body": "Suppose that and is negligible. Is it true that any modification of on into a bounded function will remain to have a negligible set of discontinuity and remain Riemann integrable on ?  "
},
{
  "id": "chp-lpintegral-4-13",
  "level": "2",
  "url": "chp-lpintegral-4.html#chp-lpintegral-4-13",
  "type": "Exercise",
  "number": "1.3.8",
  "title": "",
  "body": "Suppose that is a closed negligible subset of . Prove that the set of discontinuity of the characteristic function is precisely .  "
},
{
  "id": "chp-lpintegral-4-14",
  "level": "2",
  "url": "chp-lpintegral-4.html#chp-lpintegral-4-14",
  "type": "Exercise",
  "number": "1.3.9",
  "title": "",
  "body": "Suppose that is the union of at most countably many closed negligible subsets of . Prove that there is a bounded function defined on whose set of discontinuity is precisely .  "
},
{
  "id": "chp-lpintegral-5",
  "level": "1",
  "url": "chp-lpintegral-5.html",
  "type": "Section",
  "number": "1.4",
  "title": "Extension of the Fundamental Theorem of Calculus; Absolutely Continuous Functions",
  "body": "Extension of the Fundamental Theorem of Calculus; Absolutely Continuous Functions  Introduction   extends the Fundamental Theorem of Calculus to those monotone functions such that exists and is Riemann integrable. Here we discuss its further generalization and related issues. Questions that need to be addressed include  Identify conditions that guarantee that exists and is Riemann integrable, or exists and is in .  Does hold for any function such that  exists and is in ? More generally, under what conditions on a function on there would exist a function such that holds?  The last question has two parts: (a). The necessary conditions for to hold, in particular, does it hold that for  ? (b). The sufficient conditions for to hold.    Absolute Continuous Function   A function defined on is said to be absolutely continuous on if for any , there exists a such that for any finite collection of disjoint intervals of with its total length ,     By , if holds, then is absolutely continuous on .  If is Lipschitz continuous on , namely, there exists some such that for any , then is absolutely continuous on .  If is differentiable everywhere in and is bounded on , then is Lipschitz continuous on , therefore, is absolutely continuous on .  Cantor's function is differentiable in , yet is not absolutely continuous on .  Suppose that is differentiable in and  on . Is necessarily Lipschitz continuous on ? Is it necessarily absolutely continuous on ?   We will prove below that any absolutely continuous function on is differentiable on with its derivative a function in . Assuming this for now, we prove  Differentiability of an Indefinite Integral   Suppost that . Then the function is differentiable on and  on .    According to our discussion above, is differentiable on and . This implies that  on as .  On the other hand, according to , as . Then by (i) of , there exists a sequence such that  on as . This then identifies  on .  We could also complete the last part by using the Fatou Theorem: from which we conclude that  on via (ii) of .    For the remaining part, we will state and use Lebesgue's differentiability theorem of a monotone function but will skip its proof.  Lebesgue's Differentiability Theorem of a Monotone Function  Any monotone function on is differentiable on .   Integrability of the Derivative of a Monotone Function  Suppose that is a monotone increasing function on , then its derivative, , is the realization of a function in . Furthermore,     According to ,  on . For each , is a non-negative function in (extend for ), and using . Thus by Fatou Theorem,     Function of Bounded Variation   A function on is said to have bounded variation on , if there exists some such that for any partition ,  is called the total variation of on and is denoted as .    If is a monotone increasing function on , then it has bounded variation on and .  If is the difference of two monotone increasing functions on , then it has bounded variation on and .  Any function of bounded variation on is the difference of two monotone increasing functions.   Let be a function of bounded variation on . Define . Then is a monotone increasing function on . We now prove that is a monotone increasing function on .  Take in , then  is the supremum of for any partition , so .    An absolutely continuous function on has bounded variation on , therefore, according to , and , has its derivative in .  Fundamental Theorem of Calculus  A function on satisfies for some function iff is absolutely continuous on . When holds,  on .    We already discussed the necessary part. For the sufficient part, suppose that is absolutely continuous on . Then, according to our discussion above, exists on and is an element in . Set . Then, according to , is is absolutely continuous on and  on .  Now is absolutely continuous on and  on . We can draw our conclusion based on the following Lemma.    Absolute Function with Vanishing Derivative   Suppose that is absolutely continuous on and  on . Then must be a constant function on .    We will use the concept and properties of Vitali covering in proving this.  Vitali Covering   Suppose that is a family of intervals covering a set . Suppose that for any and any , there exists an interval such that and . Then is said for form a Vitali covering of     Vitali Covering Lemma   Suppose that is a Vitali covering of . Then for any , there exists a finite collection of disjoint intervals of such that can be covered by an open set with .   We may take the to be closed intervals in . We choose inductively. Choose from such that . After are chosen, if , define . Then and we choose some such that and .  Since this collection of disjoint intervals are all contained in , . Thus, for a given , there exists such that .  Any must be contained in some such that . Since and as , we claim that for some , for, whenever , for some . Let be the interval with the same center point as but , then whenever . Thus covers with .    Proof of  Suppose is not a constant function on . Then there exists some such that for some . Consider . Then is negligible. For any and any , for all sufficiently small , we have and Thus for any fixed such , the family forms a Vitali cover of . Thus, for any , there exists disjoint intervals such that can be covered by an open set with .  We may assume that These points, together with and , forms a partition of . The sum of the lengths of those intervals of this partition not-overlapping with any of is . Then where we set and .  We fix such that . Using the absolute continuity of on , there exists some such that for any collection of disjoint intervals with , we have . For this reason, . But We now see a contradiction and must conclude that is a constant function on    Suppose that is absolutely continuous on and  on . Is necessarily Lipschitz continuous on ?   Suppose that has bounded variation on and is absolutely continuous on for any . Furthermore, suppose that is continuous at . Prove that is absolutely continuous on .   "
},
{
  "id": "def-uniform-abs-contin-fn",
  "level": "2",
  "url": "chp-lpintegral-5.html#def-uniform-abs-contin-fn",
  "type": "Definition",
  "number": "1.4.1",
  "title": "Absolute Continuous Function.",
  "body": " Absolute Continuous Function   A function defined on is said to be absolutely continuous on if for any , there exists a such that for any finite collection of disjoint intervals of with its total length ,    "
},
{
  "id": "chp-lpintegral-5-5",
  "level": "2",
  "url": "chp-lpintegral-5.html#chp-lpintegral-5-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Lipschitz continuous "
},
{
  "id": "chp-lpintegral-5-8",
  "level": "2",
  "url": "chp-lpintegral-5.html#chp-lpintegral-5-8",
  "type": "Exercise",
  "number": "1.4.2",
  "title": "",
  "body": "Suppose that is differentiable in and  on . Is necessarily Lipschitz continuous on ? Is it necessarily absolutely continuous on ?  "
},
{
  "id": "thm-lebes-diff",
  "level": "2",
  "url": "chp-lpintegral-5.html#thm-lebes-diff",
  "type": "Theorem",
  "number": "1.4.3",
  "title": "Differentiability of an Indefinite Integral.",
  "body": "Differentiability of an Indefinite Integral   Suppost that . Then the function is differentiable on and  on .    According to our discussion above, is differentiable on and . This implies that  on as .  On the other hand, according to , as . Then by (i) of , there exists a sequence such that  on as . This then identifies  on .  We could also complete the last part by using the Fatou Theorem: from which we conclude that  on via (ii) of .   "
},
{
  "id": "thm-Lebes-diff",
  "level": "2",
  "url": "chp-lpintegral-5.html#thm-Lebes-diff",
  "type": "Theorem",
  "number": "1.4.4",
  "title": "Lebesgue’s Differentiability Theorem of a Monotone Function.",
  "body": "Lebesgue's Differentiability Theorem of a Monotone Function  Any monotone function on is differentiable on .  "
},
{
  "id": "prop-mono-int",
  "level": "2",
  "url": "chp-lpintegral-5.html#prop-mono-int",
  "type": "Proposition",
  "number": "1.4.5",
  "title": "Integrability of the Derivative of a Monotone Function.",
  "body": "Integrability of the Derivative of a Monotone Function  Suppose that is a monotone increasing function on , then its derivative, , is the realization of a function in . Furthermore,     According to ,  on . For each , is a non-negative function in (extend for ), and using . Thus by Fatou Theorem,    "
},
{
  "id": "def-bv",
  "level": "2",
  "url": "chp-lpintegral-5.html#def-bv",
  "type": "Definition",
  "number": "1.4.6",
  "title": "Function of Bounded Variation.",
  "body": "Function of Bounded Variation   A function on is said to have bounded variation on , if there exists some such that for any partition ,  is called the total variation of on and is denoted as .   "
},
{
  "id": "prop-bv-mono",
  "level": "2",
  "url": "chp-lpintegral-5.html#prop-bv-mono",
  "type": "Proposition",
  "number": "1.4.7",
  "title": "",
  "body": "Any function of bounded variation on is the difference of two monotone increasing functions.   Let be a function of bounded variation on . Define . Then is a monotone increasing function on . We now prove that is a monotone increasing function on .  Take in , then  is the supremum of for any partition , so .   "
},
{
  "id": "thm-ac",
  "level": "2",
  "url": "chp-lpintegral-5.html#thm-ac",
  "type": "Theorem",
  "number": "1.4.8",
  "title": "Fundamental Theorem of Calculus.",
  "body": "Fundamental Theorem of Calculus  A function on satisfies for some function iff is absolutely continuous on . When holds,  on .    We already discussed the necessary part. For the sufficient part, suppose that is absolutely continuous on . Then, according to our discussion above, exists on and is an element in . Set . Then, according to , is is absolutely continuous on and  on .  Now is absolutely continuous on and  on . We can draw our conclusion based on the following Lemma.   "
},
{
  "id": "lemm-ac",
  "level": "2",
  "url": "chp-lpintegral-5.html#lemm-ac",
  "type": "Lemma",
  "number": "1.4.9",
  "title": "Absolute Function with Vanishing Derivative.",
  "body": "Absolute Function with Vanishing Derivative   Suppose that is absolutely continuous on and  on . Then must be a constant function on .   "
},
{
  "id": "def-vitali",
  "level": "2",
  "url": "chp-lpintegral-5.html#def-vitali",
  "type": "Definition",
  "number": "1.4.10",
  "title": "Vitali Covering.",
  "body": "Vitali Covering   Suppose that is a family of intervals covering a set . Suppose that for any and any , there exists an interval such that and . Then is said for form a Vitali covering of    "
},
{
  "id": "lemm-vitali",
  "level": "2",
  "url": "chp-lpintegral-5.html#lemm-vitali",
  "type": "Lemma",
  "number": "1.4.11",
  "title": "Vitali Covering Lemma.",
  "body": "Vitali Covering Lemma   Suppose that is a Vitali covering of . Then for any , there exists a finite collection of disjoint intervals of such that can be covered by an open set with .   We may take the to be closed intervals in . We choose inductively. Choose from such that . After are chosen, if , define . Then and we choose some such that and .  Since this collection of disjoint intervals are all contained in , . Thus, for a given , there exists such that .  Any must be contained in some such that . Since and as , we claim that for some , for, whenever , for some . Let be the interval with the same center point as but , then whenever . Thus covers with .   "
},
{
  "id": "chp-lpintegral-5-24",
  "level": "2",
  "url": "chp-lpintegral-5.html#chp-lpintegral-5-24",
  "type": "Proof",
  "number": "1.4.1",
  "title": "Proof of Lemma 1.4.9.",
  "body": "Proof of  Suppose is not a constant function on . Then there exists some such that for some . Consider . Then is negligible. For any and any , for all sufficiently small , we have and Thus for any fixed such , the family forms a Vitali cover of . Thus, for any , there exists disjoint intervals such that can be covered by an open set with .  We may assume that These points, together with and , forms a partition of . The sum of the lengths of those intervals of this partition not-overlapping with any of is . Then where we set and .  We fix such that . Using the absolute continuity of on , there exists some such that for any collection of disjoint intervals with , we have . For this reason, . But We now see a contradiction and must conclude that is a constant function on   "
},
{
  "id": "chp-lpintegral-5-25",
  "level": "2",
  "url": "chp-lpintegral-5.html#chp-lpintegral-5-25",
  "type": "Exercise",
  "number": "1.4.12",
  "title": "",
  "body": "Suppose that is absolutely continuous on and  on . Is necessarily Lipschitz continuous on ?  "
},
{
  "id": "chp-lpintegral-5-26",
  "level": "2",
  "url": "chp-lpintegral-5.html#chp-lpintegral-5-26",
  "type": "Exercise",
  "number": "1.4.13",
  "title": "",
  "body": "Suppose that has bounded variation on and is absolutely continuous on for any . Furthermore, suppose that is continuous at . Prove that is absolutely continuous on .  "
},
{
  "id": "uniformconv",
  "level": "1",
  "url": "uniformconv.html",
  "type": "Section",
  "number": "2.1",
  "title": "Concept of Uniform Convergence",
  "body": " Concept of Uniform Convergence  Simple examples illustrate that pointwise limit of a sequence of continuous functions can fail to be continuous, and that even pointwise limit of a sequence of continuously differentiable functions can also fail to be continuous. The key cause is that the convergence may not be uniform , namely, for each and each , there exists which may depend on as well as on such that when , we have ; but the minimum needed for may not be uniform over . The following definition defines the notion of uniform convergence.  Uniform Convergence  Let be a sequence of functions defined on a set . Then converges uniformly on to a limit function on if, for every , there exists such that for all and for all  .    Note that one needs to specify the set when discussing the notion of uniform convergence. For example, the sequence of functions is converging pointwise to on , but not uniformly on . However, for any fixed  , uniformly over .   Examine the notion of pointwise and uniform convergence     We continue to work with and consider it on . It still converges pointwise, but the limiting function fails to be continuous at . This is due to the failure of uniform convergence on .  Here we still have    If we modify into Then pointwise on , although the convergence is still not uniform, as as . When we examine , we find it equal to as .  However, if we modify into , we continue to have pointwise on . The convergence is still not uniform, as . And we find that !    Note that in all the cases above, once we fix some , the relevant sequences of functions converge to uniformly over , so they fail to converge uniformly only over a neighborhood of . To examine question (b) raised earlier, we just need to answer whether the following holds: where stands for one of the sequences above. Through direct examination we find that this holds for , but fails for .     In most contexts we confine to or -valued functions defined on a set . The notion of uniform convergence can be defined as along as there is a quantitative way to describe how close is to . If is a metric space with as the metric, and , then the notion of uniform convergence of makes sense. More specifically, uniformly over , if for any , there exists such that for all , . This notion does not require to be a metric space.  On the other hand, the notion of uniform continuity also requires a mechanism of quantitatively describing how close are in , and it would make sense if both and are metric spaces.   "
},
{
  "id": "uniformconv-3",
  "level": "2",
  "url": "uniformconv.html#uniformconv-3",
  "type": "Definition",
  "number": "2.1.1",
  "title": "Uniform Convergence.",
  "body": "Uniform Convergence  Let be a sequence of functions defined on a set . Then converges uniformly on to a limit function on if, for every , there exists such that for all and for all  .   "
},
{
  "id": "uniformconv-4",
  "level": "2",
  "url": "uniformconv.html#uniformconv-4",
  "type": "Remark",
  "number": "2.1.2",
  "title": "",
  "body": "Note that one needs to specify the set when discussing the notion of uniform convergence. For example, the sequence of functions is converging pointwise to on , but not uniformly on . However, for any fixed  , uniformly over .  "
},
{
  "id": "uniformconv-5",
  "level": "2",
  "url": "uniformconv.html#uniformconv-5",
  "type": "Example",
  "number": "2.1.3",
  "title": "Examine the notion of pointwise and uniform convergence.",
  "body": "Examine the notion of pointwise and uniform convergence     We continue to work with and consider it on . It still converges pointwise, but the limiting function fails to be continuous at . This is due to the failure of uniform convergence on .  Here we still have    If we modify into Then pointwise on , although the convergence is still not uniform, as as . When we examine , we find it equal to as .  However, if we modify into , we continue to have pointwise on . The convergence is still not uniform, as . And we find that !    Note that in all the cases above, once we fix some , the relevant sequences of functions converge to uniformly over , so they fail to converge uniformly only over a neighborhood of . To examine question (b) raised earlier, we just need to answer whether the following holds: where stands for one of the sequences above. Through direct examination we find that this holds for , but fails for .   "
},
{
  "id": "uniformconv-6",
  "level": "2",
  "url": "uniformconv.html#uniformconv-6",
  "type": "Remark",
  "number": "2.1.4",
  "title": "",
  "body": " In most contexts we confine to or -valued functions defined on a set . The notion of uniform convergence can be defined as along as there is a quantitative way to describe how close is to . If is a metric space with as the metric, and , then the notion of uniform convergence of makes sense. More specifically, uniformly over , if for any , there exists such that for all , . This notion does not require to be a metric space.  On the other hand, the notion of uniform continuity also requires a mechanism of quantitatively describing how close are in , and it would make sense if both and are metric spaces.  "
},
{
  "id": "uniformconvprop",
  "level": "1",
  "url": "uniformconvprop.html",
  "type": "Section",
  "number": "2.2",
  "title": "Properties of A Uniformly Convergent Sequence of Functions",
  "body": " Properties of A Uniformly Convergent Sequence of Functions   The Limit of A Uniformly Convergent Sequence of Continuous Functions is Continuous   Suppose that is a sequence of functions defined on a set which converges uniformly on to a limit function on , and that is such that exists for each . Then both and exist and equal each other. Namely   As a consequence, suppose that is a sequence of continuous functions defined on a set which converges uniformly on to a limit function on , then is continuous on .    We will first show that is Cauchy as and that is Cauchy as . The latter means that , there exists a neighborhood of of such that for all .  For any , by the uniform convergence assumption, there exists some such that Using , there exists some neighborhood of such that Then for all , we have Using we obtain This shows that is Cauchy as , so has a limit. Call it .  In the same setting, for , But , so we have , for , which shows that is Cauchy as and exists.  Now for any , sending in , we get Then sending in the above we get Since this holds for any , we conclude that .    In some contexts (often when dealing with series of functions), the limit function in the definition of uniform convergence may not be known; then we have the following   Cauchy Criterion for Uniform Convergence   Suppose that is a sequence of functions defined on a set . Suppose that for any , there exists such that for any  then converges uniformly on .  Suppose that is a series of functions defined on a set and that for all and all . Suppose further that the series converges uniformly on . Then the series converges uniformly on .      implies that the answer to question (a) above would be affirmative, if we assume that uniformly over .  One often cannot apply directly on the entire interval on which the question is being asked. For example, we know that the sequence of functions converges for every , but does not converge uniformly on (can you provide a proof?). Using the Cauchy Criterion for Uniform Convergence we can also see that, for any , the sequence of converges uniformly on , therefore, making the limit a continuous function on . Since is arbitrary subject to , and any can be included in some with , this shows that the limit a continuous function on . (The limit fails to be a uniformly continuous function on , even though each is uniformly continuous on .)    Does the series converge uniformly over ? Does it define a continuous function on ?    Is it true that if a sequence of continuous functions on converges uniformly to on , then is bounded on ?    Although the -test is an often used tool to check for uniform convergence, there are cases where the -test doe not apply directly, as in the case of , as this series only converges conditionally. Here one needs to check directly whether the Cauchy Criterion for Uniform Convergence holds for the partial sums of this series, namely, we need to examine whether, for any , we can find such that for all , we have   This series can be analyzed by applying the summation by parts via Abel's Lemma. Set . Then, using that each is the imaginary part of and a simple formula for the sum of the latter, we have Note that , so does not remain bounded uniformly in near . However, for any , when is restricted to , there exists some depending on such that uniformly in . Then for such the Abel summation-by-parts formula gives , provided for some sufficiently large depending on and (therefore depending on ). Here, a crucial property used is the monotonicity of , which is used in which then allows for telescoping. This verifies the Cauchy Criterion for Uniform Convergence on .  Since this series is periodic, so the result on can be extended to by using the periodic property.    Interchange of Limits and Integration   Suppose that is a sequence of Riemann-Stieltjes integrable functions with respect to on with finite, and that uniformly over . Then is Riemann-Stieltjes integrable functions with respect to on and   Suppose that is a sequence of Riemann-Stieltjes integrable functions with respect to on with finite, and that the series converges uniformly over . Then is Riemann-Stieltjes integrable functions with respect to on and     For simplicity of presentation we will assume that is monotone increasing, and set . For any , we first use the uniform convergence of to on to find some such that for all and all , . So for any partition of and any interval , we have for all , from which it follows that Similarly, we have , so and   Next, for any , we find a partition of such that Now we find which, when combined with the above estimates, gives This shows that and since , we have This shows that .  The case for the series follows from the above by applying it to the sequence of partial sums of the series.     The formulation here allows either or to be infinite, as long as there is a finite variation over . For instance, for , the integral could be formulated as , with . If for some , , we can conclude that   Often one needs some modification to . Suppose that for any finite , uniformly over , and that for some , we have Then, it follows that for all , and that for some fixed , So for any , we can find some depending on such that for all and all . But this is not quite the same as . We next discussion an extension to address such scenarios.   Identify the pointwise limit of the sequence for . Does it converge uniformly over ? Does it holds that ?    Identify the pointwise limit of the sequence for . Does it converge uniformly over ? Does it holds that ?   "
},
{
  "id": "uniformconvconti",
  "level": "2",
  "url": "uniformconvprop.html#uniformconvconti",
  "type": "Theorem",
  "number": "2.2.1",
  "title": "The Limit of A Uniformly Convergent Sequence of Continuous Functions is Continuous.",
  "body": " The Limit of A Uniformly Convergent Sequence of Continuous Functions is Continuous   Suppose that is a sequence of functions defined on a set which converges uniformly on to a limit function on , and that is such that exists for each . Then both and exist and equal each other. Namely   As a consequence, suppose that is a sequence of continuous functions defined on a set which converges uniformly on to a limit function on , then is continuous on .    We will first show that is Cauchy as and that is Cauchy as . The latter means that , there exists a neighborhood of of such that for all .  For any , by the uniform convergence assumption, there exists some such that Using , there exists some neighborhood of such that Then for all , we have Using we obtain This shows that is Cauchy as , so has a limit. Call it .  In the same setting, for , But , so we have , for , which shows that is Cauchy as and exists.  Now for any , sending in , we get Then sending in the above we get Since this holds for any , we conclude that .   "
},
{
  "id": "th-CCUC",
  "level": "2",
  "url": "uniformconvprop.html#th-CCUC",
  "type": "Theorem",
  "number": "2.2.2",
  "title": "Cauchy Criterion for Uniform Convergence.",
  "body": " Cauchy Criterion for Uniform Convergence   Suppose that is a sequence of functions defined on a set . Suppose that for any , there exists such that for any  then converges uniformly on .  Suppose that is a series of functions defined on a set and that for all and all . Suppose further that the series converges uniformly on . Then the series converges uniformly on .   "
},
{
  "id": "uniformconvprop-5",
  "level": "2",
  "url": "uniformconvprop.html#uniformconvprop-5",
  "type": "Remark",
  "number": "2.2.3",
  "title": "",
  "body": "  implies that the answer to question (a) above would be affirmative, if we assume that uniformly over .  One often cannot apply directly on the entire interval on which the question is being asked. For example, we know that the sequence of functions converges for every , but does not converge uniformly on (can you provide a proof?). Using the Cauchy Criterion for Uniform Convergence we can also see that, for any , the sequence of converges uniformly on , therefore, making the limit a continuous function on . Since is arbitrary subject to , and any can be included in some with , this shows that the limit a continuous function on . (The limit fails to be a uniformly continuous function on , even though each is uniformly continuous on .)  "
},
{
  "id": "uniformconvprop-6",
  "level": "2",
  "url": "uniformconvprop.html#uniformconvprop-6",
  "type": "Exercise",
  "number": "2.2.4",
  "title": "",
  "body": " Does the series converge uniformly over ? Does it define a continuous function on ?  "
},
{
  "id": "uniformconvprop-7",
  "level": "2",
  "url": "uniformconvprop.html#uniformconvprop-7",
  "type": "Exercise",
  "number": "2.2.5",
  "title": "",
  "body": " Is it true that if a sequence of continuous functions on converges uniformly to on , then is bounded on ?  "
},
{
  "id": "uniformconvprop-8",
  "level": "2",
  "url": "uniformconvprop.html#uniformconvprop-8",
  "type": "Remark",
  "number": "2.2.6",
  "title": "",
  "body": " Although the -test is an often used tool to check for uniform convergence, there are cases where the -test doe not apply directly, as in the case of , as this series only converges conditionally. Here one needs to check directly whether the Cauchy Criterion for Uniform Convergence holds for the partial sums of this series, namely, we need to examine whether, for any , we can find such that for all , we have   This series can be analyzed by applying the summation by parts via Abel's Lemma. Set . Then, using that each is the imaginary part of and a simple formula for the sum of the latter, we have Note that , so does not remain bounded uniformly in near . However, for any , when is restricted to , there exists some depending on such that uniformly in . Then for such the Abel summation-by-parts formula gives , provided for some sufficiently large depending on and (therefore depending on ). Here, a crucial property used is the monotonicity of , which is used in which then allows for telescoping. This verifies the Cauchy Criterion for Uniform Convergence on .  Since this series is periodic, so the result on can be extended to by using the periodic property.  "
},
{
  "id": "thm-uniformconvint",
  "level": "2",
  "url": "uniformconvprop.html#thm-uniformconvint",
  "type": "Theorem",
  "number": "2.2.7",
  "title": "Interchange of Limits and Integration.",
  "body": " Interchange of Limits and Integration   Suppose that is a sequence of Riemann-Stieltjes integrable functions with respect to on with finite, and that uniformly over . Then is Riemann-Stieltjes integrable functions with respect to on and   Suppose that is a sequence of Riemann-Stieltjes integrable functions with respect to on with finite, and that the series converges uniformly over . Then is Riemann-Stieltjes integrable functions with respect to on and     For simplicity of presentation we will assume that is monotone increasing, and set . For any , we first use the uniform convergence of to on to find some such that for all and all , . So for any partition of and any interval , we have for all , from which it follows that Similarly, we have , so and   Next, for any , we find a partition of such that Now we find which, when combined with the above estimates, gives This shows that and since , we have This shows that .  The case for the series follows from the above by applying it to the sequence of partial sums of the series.   "
},
{
  "id": "uniformconvprop-10",
  "level": "2",
  "url": "uniformconvprop.html#uniformconvprop-10",
  "type": "Remark",
  "number": "2.2.8",
  "title": "",
  "body": " The formulation here allows either or to be infinite, as long as there is a finite variation over . For instance, for , the integral could be formulated as , with . If for some , , we can conclude that   Often one needs some modification to . Suppose that for any finite , uniformly over , and that for some , we have Then, it follows that for all , and that for some fixed , So for any , we can find some depending on such that for all and all . But this is not quite the same as . We next discussion an extension to address such scenarios.  "
},
{
  "id": "uniformconvprop-11",
  "level": "2",
  "url": "uniformconvprop.html#uniformconvprop-11",
  "type": "Exercise",
  "number": "2.2.9",
  "title": "",
  "body": "Identify the pointwise limit of the sequence for . Does it converge uniformly over ? Does it holds that ?  "
},
{
  "id": "uniformconvprop-12",
  "level": "2",
  "url": "uniformconvprop.html#uniformconvprop-12",
  "type": "Exercise",
  "number": "2.2.10",
  "title": "",
  "body": " Identify the pointwise limit of the sequence for . Does it converge uniformly over ? Does it holds that ?  "
},
{
  "id": "termwiseintex",
  "level": "1",
  "url": "termwiseintex.html",
  "type": "Section",
  "number": "2.3",
  "title": "An Extended Criterion for the Interchange of Integration and Limits  of a Sequence of Functions",
  "body": " An Extended Criterion for the Interchange of Integration and Limits of a Sequence of Functions   The conditions in often can't be verified on the entity of , but can be verified after deleting a set of small size , for example, deleting a small neighbored of one or a finite number of points. If some further uniform integrability conditions are assumed, then the conclusions of still holds. The discussion below will involve some aspect of improper integrals .   An Extension of  Suppose that, for any , uniformly on , and that each has a convergent integral (if it is improper at ). Furthermore, assume the following uniform integrability of the family : Then has a convergent integral , and     First, for any , we can apply on to conclude that Next, let be chosen according to the uniform integrability of the family in for a given . If we set , then for any , we would get This then implies that which implies that the integral is convergent at , and Finally, using and applying on , we find some such that for all , which implies for all , therefore proving the claimed conclusion.    What is called uniform integrability is also called equi-integrability . The prefix \"equi\" here refers uniformity in , as the notion of equip-continuity to be introduced soon.  Note also that the above formulation allows , which is a case of an improper integral.  One sufficient condition for is the existence of an integrable dominating function  in the sense that   for all sufficiently large.   is convergent.    In the case that gives rise to the usual infinite series, namely, when , the condition takes the form of Namely, the tail part of the summation, , can be made small uniformly in . One sufficient condition for the above is condition of the existence of a similar dominating function: defined for such that   for all sufficiently large   is convergent.      Examples for the extension  A particular case of an integrable dominating function is a constant function when is finite. Using this kind of argument one gets even though the convergence is not uniform over .  For the series , is a good dominating function, and we get   On the other hand, consider the series , the terms uniformly in as , so in this situation despite the terms in the series converging to uniformly in as .   Often we encounter a situation similar to that of , but we work with a continuum family of functions in for the parameters in some metric space , instead of a sequence of functions. Then the appropriate modified conclusion should be and the appropriate modification of the uniform convergence condition should be A similar modification for can be formulated.    Identify the pointwise limit of the sequence for . Does it converge uniformly over ? Does it holds that ?    Does it hold that ?   "
},
{
  "id": "termwiseintex-2",
  "level": "2",
  "url": "termwiseintex.html#termwiseintex-2",
  "type": "Remark",
  "number": "2.3.1",
  "title": "",
  "body": " The conditions in often can't be verified on the entity of , but can be verified after deleting a set of small size , for example, deleting a small neighbored of one or a finite number of points. If some further uniform integrability conditions are assumed, then the conclusions of still holds. The discussion below will involve some aspect of improper integrals .  "
},
{
  "id": "intconv",
  "level": "2",
  "url": "termwiseintex.html#intconv",
  "type": "Theorem",
  "number": "2.3.2",
  "title": "An Extension of Theorem 2.2.7.",
  "body": "An Extension of  Suppose that, for any , uniformly on , and that each has a convergent integral (if it is improper at ). Furthermore, assume the following uniform integrability of the family : Then has a convergent integral , and     First, for any , we can apply on to conclude that Next, let be chosen according to the uniform integrability of the family in for a given . If we set , then for any , we would get This then implies that which implies that the integral is convergent at , and Finally, using and applying on , we find some such that for all , which implies for all , therefore proving the claimed conclusion.   "
},
{
  "id": "termwiseintex-4",
  "level": "2",
  "url": "termwiseintex.html#termwiseintex-4",
  "type": "Note",
  "number": "2.3.3",
  "title": "",
  "body": "What is called uniform integrability is also called equi-integrability . The prefix \"equi\" here refers uniformity in , as the notion of equip-continuity to be introduced soon.  Note also that the above formulation allows , which is a case of an improper integral.  One sufficient condition for is the existence of an integrable dominating function  in the sense that   for all sufficiently large.   is convergent.    In the case that gives rise to the usual infinite series, namely, when , the condition takes the form of Namely, the tail part of the summation, , can be made small uniformly in . One sufficient condition for the above is condition of the existence of a similar dominating function: defined for such that   for all sufficiently large   is convergent.    "
},
{
  "id": "termwiseintex-6",
  "level": "2",
  "url": "termwiseintex.html#termwiseintex-6",
  "type": "Remark",
  "number": "2.3.4",
  "title": "",
  "body": "Often we encounter a situation similar to that of , but we work with a continuum family of functions in for the parameters in some metric space , instead of a sequence of functions. Then the appropriate modified conclusion should be and the appropriate modification of the uniform convergence condition should be A similar modification for can be formulated.  "
},
{
  "id": "termwiseintex-7",
  "level": "2",
  "url": "termwiseintex.html#termwiseintex-7",
  "type": "Exercise",
  "number": "2.3.5",
  "title": "",
  "body": " Identify the pointwise limit of the sequence for . Does it converge uniformly over ? Does it holds that ?  "
},
{
  "id": "termwiseintex-8",
  "level": "2",
  "url": "termwiseintex.html#termwiseintex-8",
  "type": "Exercise",
  "number": "2.3.6",
  "title": "",
  "body": " Does it hold that ?  "
},
{
  "id": "xlimitdiff",
  "level": "1",
  "url": "xlimitdiff.html",
  "type": "Section",
  "number": "2.4",
  "title": "Interchange of Differentiation and Limit of a Sequence of  Functions",
  "body": " Interchange of Differentiation and Limit of a Sequence of Functions   Interchange of Differentiation and Limit of a Sequence of Functions   Suppose that is a sequence of functions differentiable on and that converges for some . Suppose, in addition, that converges uniformly on . Then converges uniformly on to a differentiable function , and     Let's first give a proof under a stronger assumption: each is continuous on , and let's denote by . Then is continuous on , , and implies that , so exists---denote it as and It follows that Furthermore, the convergence above is uniform over , as as .  We now do a proof in the general case. First, we prove that converges uniformly over . Under the assumption of uniform convergence of over , for any , there exists such that for , we have Applying the theorem of the mean to , we get for some depending on . This leads to Since as , this shows that satisfies the Cauchy Criterion for Uniform Convergence on , therefore it converges uniformly to some on .  Next for any we define for for some (when or , we restrict to have appropriate sign). Note that as and that as . We next show that this convergence is uniform for .  We apply the theorem of the mean to to get for some between and depending on . But holds for , so we get for uniformly in . This shows that converges to uniformly in as . Now applies to to conclude that Namely, exists and equals .    In , the assumptions are only sufficient, but not necessary conditions. E.g. converges to uniformly on , and is differentiable on , yet the convergence of (to ) is not uniform on (although when restricted to for any fixed , the convergence is uniform.). Another example is , which converges to uniformly on , yet would not converge for many values of (e.g. all rational multiples of ).    Define The series converges uniformly for so it defines a continuous function on . To check its differentiability at any , we need to check whether the differentiated series converges uniformly in a neighborhood of , according to .  We studied this series earlier and showed that for any , it converges uniformly when restricted to . Thus in that region, we do have Does exist?    Weierstrass' nowhere differentiable function, which is defined as is the uniform limit on of the infinite series above whose terms are infinitely times differentiable. One can also construct a nowhere differentiable function from the uniform limit of but the building blocks in this construction are not differentiable.  Ideas similar to the Weierstrass's construction show up in later work of J. Nash in constructing isometric imbedding of a given Riemannian metric, and in more recent work in constructing very rough solutions of Navier-Stokes equations. Roughly speaking, one constructs sufficiently differentiable functions which approximately satisfy the specified equations, but in the limit only a low order regularity is preserved, and the differentiability is lost.   "
},
{
  "id": "thm-xlimitdiff",
  "level": "2",
  "url": "xlimitdiff.html#thm-xlimitdiff",
  "type": "Theorem",
  "number": "2.4.1",
  "title": "Interchange of Differentiation and Limit of a Sequence of  Functions.",
  "body": " Interchange of Differentiation and Limit of a Sequence of Functions   Suppose that is a sequence of functions differentiable on and that converges for some . Suppose, in addition, that converges uniformly on . Then converges uniformly on to a differentiable function , and     Let's first give a proof under a stronger assumption: each is continuous on , and let's denote by . Then is continuous on , , and implies that , so exists---denote it as and It follows that Furthermore, the convergence above is uniform over , as as .  We now do a proof in the general case. First, we prove that converges uniformly over . Under the assumption of uniform convergence of over , for any , there exists such that for , we have Applying the theorem of the mean to , we get for some depending on . This leads to Since as , this shows that satisfies the Cauchy Criterion for Uniform Convergence on , therefore it converges uniformly to some on .  Next for any we define for for some (when or , we restrict to have appropriate sign). Note that as and that as . We next show that this convergence is uniform for .  We apply the theorem of the mean to to get for some between and depending on . But holds for , so we get for uniformly in . This shows that converges to uniformly in as . Now applies to to conclude that Namely, exists and equals .   "
},
{
  "id": "xlimitdiff-3",
  "level": "2",
  "url": "xlimitdiff.html#xlimitdiff-3",
  "type": "Remark",
  "number": "2.4.2",
  "title": "",
  "body": "In , the assumptions are only sufficient, but not necessary conditions. E.g. converges to uniformly on , and is differentiable on , yet the convergence of (to ) is not uniform on (although when restricted to for any fixed , the convergence is uniform.). Another example is , which converges to uniformly on , yet would not converge for many values of (e.g. all rational multiples of ).  "
},
{
  "id": "xlimitdiff-4",
  "level": "2",
  "url": "xlimitdiff.html#xlimitdiff-4",
  "type": "Example",
  "number": "2.4.3",
  "title": "",
  "body": " Define The series converges uniformly for so it defines a continuous function on . To check its differentiability at any , we need to check whether the differentiated series converges uniformly in a neighborhood of , according to .  We studied this series earlier and showed that for any , it converges uniformly when restricted to . Thus in that region, we do have Does exist?  "
},
{
  "id": "xlimitdiff-5",
  "level": "2",
  "url": "xlimitdiff.html#xlimitdiff-5",
  "type": "Remark",
  "number": "2.4.4",
  "title": "",
  "body": " Weierstrass' nowhere differentiable function, which is defined as is the uniform limit on of the infinite series above whose terms are infinitely times differentiable. One can also construct a nowhere differentiable function from the uniform limit of but the building blocks in this construction are not differentiable.  Ideas similar to the Weierstrass's construction show up in later work of J. Nash in constructing isometric imbedding of a given Riemannian metric, and in more recent work in constructing very rough solutions of Navier-Stokes equations. Roughly speaking, one constructs sufficiently differentiable functions which approximately satisfy the specified equations, but in the limit only a low order regularity is preserved, and the differentiability is lost.  "
},
{
  "id": "fcnspacemetric",
  "level": "1",
  "url": "fcnspacemetric.html",
  "type": "Section",
  "number": "2.5",
  "title": "Metrics on Function Spaces",
  "body": " Metrics on Function Spaces  Another way of viewing is that the , the space of continuous functions on ---assuming to be compact, equipped with the metric is a complete metric space.  On the space of Riemann-Stieltjes integrable functions, is also well defined and becomes a metric on . implies that is a complete metric with this metric.  However, in applications we often need to work with another \"metric\" on : We put a quotation mark on \"metric\" because it satisfies all the conditions of a metric except for one: may not imply that for all . One may use to define a relation between two functions , and it's easy to see that this is an equivalence relation. Let's continue to use to denote the space of equivalence classes of under this equivalence relation.  Question  Is a complete metric space under this metric?   The answer turns out to be negative in general, and this turns out a major drawback of Riemann integrable. The main advantage of Lebesgue's integral is that it corrects this deficiency. We will prove that is dense in in . In Lebesgue's integration theory, it is established that the completion of in is the space of Lebesgue integrable functions.  A metric on  Note that defines a metric on , which makes a complete metric space with bounded diameter---the latter follows because for all . This metric defines the same topology on as the usual Euclidean metric does, namely, a set is open in this metric iff it is open in the usual Euclidean metric.  We can define a metric for . A sequence converges to pointwise iff as .  If we take if ; and if . Then pointwise, but not uniformly over , and as .   Prove the assertion that a sequence converges to pointwise iff as .   Prove that the metric space , where is the metric introduced in the above example, is not compact, but for any , the set is a compact set in this metric space.   "
},
{
  "id": "fcnspacemetric-7",
  "level": "2",
  "url": "fcnspacemetric.html#fcnspacemetric-7",
  "type": "Example",
  "number": "2.5.1",
  "title": "A metric on <span class=\"process-math\">\\(\\bbR^{\\bbN}\\)<\/span>.",
  "body": "A metric on  Note that defines a metric on , which makes a complete metric space with bounded diameter---the latter follows because for all . This metric defines the same topology on as the usual Euclidean metric does, namely, a set is open in this metric iff it is open in the usual Euclidean metric.  We can define a metric for . A sequence converges to pointwise iff as .  If we take if ; and if . Then pointwise, but not uniformly over , and as .  "
},
{
  "id": "fcnspacemetric-8",
  "level": "2",
  "url": "fcnspacemetric.html#fcnspacemetric-8",
  "type": "Exercise",
  "number": "2.5.2",
  "title": "",
  "body": "Prove the assertion that a sequence converges to pointwise iff as .  "
},
{
  "id": "fcnspacemetric-9",
  "level": "2",
  "url": "fcnspacemetric.html#fcnspacemetric-9",
  "type": "Exercise",
  "number": "2.5.3",
  "title": "",
  "body": "Prove that the metric space , where is the metric introduced in the above example, is not compact, but for any , the set is a compact set in this metric space.  "
},
{
  "id": "equicontinuity",
  "level": "1",
  "url": "equicontinuity.html",
  "type": "Section",
  "number": "2.6",
  "title": "Equicontinuous Family of Functions",
  "body": " Equicontinuous Family of Functions  Equicontinuous Family   A family of functions defined on a set in a metric space is said to be equicontinuous on if for every there exists some such that     On the notion of equicontinuous family of functions  A fundamental property of the set of real numbers is the Bolzano-Weierstrass Theorem: any bounded sequence in has a convergent subsequence. One would like to find an appropriate extension of this property on function spaces such as the set of continuous functions on a metric space . Unfortunately, the direct extension does not hold, as demonstrated by the sequence of functions in .  Using when , it's clear that can't have a subsequence converging uniformly on . In fact it can't have a subsequence converging pointwise on .  In the situation of the example, what one can directly extend is the following property: there exists a countable dense subset of and a subsequence such that it converges at every . To be able to say that one can choose a subsequence such that it converges at every , one needs to control the behavior of for . The condition of being equicontinuous is the one what would give us the desired property.  Heuristically, the equicontinuous condition guarantees that the oscillation of to be smaller than for over any neighborhood of suitably small diameter, uniformly in . This allows us to propagate the property to Using the total boundedness of , this shows that is uniformly Cauchy on .    A sequence of functions defined on is said to be pointwise bounded on if for every the sequence of scalars is bounded. is said to be uniformly bounded on if there exists such that     Selecting a Convergent Subsequence  Suppose that is a sequence of pointwise bounded functions on a countable set . Then it has a subsequence such that converges for every .   Let , , be the points of arranged in a sequence. Then is a bounded sequence, therefore, has a convergent subsequence, say . Next we pick a convergent subsequence from the bounded sequence . Continuing in this fashion for each , we obtain such that for each , converges for each as .  Finally, is a subsequence of which converges at each .    Ascolli-Arzel Theorem   Suppose that is a compact metric space and that is a sequence in pointwise bounded and equicontinuous on . Then   is uniformly bounded on ,   contains a uniformly convergent subsequence.     For any , let be such that holds. Since is compact, it can be covered by a finite number of sets of diameter , say, .  Pick for each . Then for each , there exists some such that for all . Any satisfies Let . Then any satisfies for all , which shows (a).  The compactness of implies that it has a dense countable subset . It then follows from that we can pick a subsequence such that converges for each , .  Each contains some . It follows that there exists some such that for all and .  Using the finite cover of and on , we find that for any , for some , therefore, for all . This show that is uniformly Cauchy on , therefore proving (b).     The Bolzano-Weierstrass\/Ascolli-Arzel property has extensions to function spaces where the convergence is not uniform but in integral norms. We first describe a generalization in the context of the space , defined for as the space of infinite sequences such that we note that, for , if a sequence converges to some in , then for any , there exists such that and there exists some such that for , This then implies, by Minkowski's inequality, that For the finite number of elements , we can certainly find some such that, for , so   This turns out to be also a sufficient condition in order to extract a convergent subsequence in . We formulate the condition more precisely in the following.   Equi-summable Family in   A family of elements in is said to be equi-summable in , if for any , there exists such that     (Sequential) Compactness Condition in  For , a sequence has a subsequence converging in iff this sequence is equisummable in .   Prove that is a complete metric space.  Provide a proof of .  "
},
{
  "id": "equicontinuity-2",
  "level": "2",
  "url": "equicontinuity.html#equicontinuity-2",
  "type": "Definition",
  "number": "2.6.1",
  "title": "Equicontinuous Family.",
  "body": "Equicontinuous Family   A family of functions defined on a set in a metric space is said to be equicontinuous on if for every there exists some such that    "
},
{
  "id": "equicontinuity-3",
  "level": "2",
  "url": "equicontinuity.html#equicontinuity-3",
  "type": "Remark",
  "number": "2.6.2",
  "title": "On the notion of equicontinuous family of functions.",
  "body": "On the notion of equicontinuous family of functions  A fundamental property of the set of real numbers is the Bolzano-Weierstrass Theorem: any bounded sequence in has a convergent subsequence. One would like to find an appropriate extension of this property on function spaces such as the set of continuous functions on a metric space . Unfortunately, the direct extension does not hold, as demonstrated by the sequence of functions in .  Using when , it's clear that can't have a subsequence converging uniformly on . In fact it can't have a subsequence converging pointwise on .  In the situation of the example, what one can directly extend is the following property: there exists a countable dense subset of and a subsequence such that it converges at every . To be able to say that one can choose a subsequence such that it converges at every , one needs to control the behavior of for . The condition of being equicontinuous is the one what would give us the desired property.  Heuristically, the equicontinuous condition guarantees that the oscillation of to be smaller than for over any neighborhood of suitably small diameter, uniformly in . This allows us to propagate the property to Using the total boundedness of , this shows that is uniformly Cauchy on .  "
},
{
  "id": "def-ptwsbd",
  "level": "2",
  "url": "equicontinuity.html#def-ptwsbd",
  "type": "Definition",
  "number": "2.6.3",
  "title": "",
  "body": " A sequence of functions defined on is said to be pointwise bounded on if for every the sequence of scalars is bounded. is said to be uniformly bounded on if there exists such that    "
},
{
  "id": "slctconvsubs",
  "level": "2",
  "url": "equicontinuity.html#slctconvsubs",
  "type": "Proposition",
  "number": "2.6.4",
  "title": "Selecting a Convergent Subsequence.",
  "body": "Selecting a Convergent Subsequence  Suppose that is a sequence of pointwise bounded functions on a countable set . Then it has a subsequence such that converges for every .   Let , , be the points of arranged in a sequence. Then is a bounded sequence, therefore, has a convergent subsequence, say . Next we pick a convergent subsequence from the bounded sequence . Continuing in this fashion for each , we obtain such that for each , converges for each as .  Finally, is a subsequence of which converges at each .   "
},
{
  "id": "Ascolli-Arzela",
  "level": "2",
  "url": "equicontinuity.html#Ascolli-Arzela",
  "type": "Theorem",
  "number": "2.6.5",
  "title": "Ascolli-Arzel Theorem.",
  "body": "Ascolli-Arzel Theorem   Suppose that is a compact metric space and that is a sequence in pointwise bounded and equicontinuous on . Then   is uniformly bounded on ,   contains a uniformly convergent subsequence.     For any , let be such that holds. Since is compact, it can be covered by a finite number of sets of diameter , say, .  Pick for each . Then for each , there exists some such that for all . Any satisfies Let . Then any satisfies for all , which shows (a).  The compactness of implies that it has a dense countable subset . It then follows from that we can pick a subsequence such that converges for each , .  Each contains some . It follows that there exists some such that for all and .  Using the finite cover of and on , we find that for any , for some , therefore, for all . This show that is uniformly Cauchy on , therefore proving (b).   "
},
{
  "id": "equicontinuity-7",
  "level": "2",
  "url": "equicontinuity.html#equicontinuity-7",
  "type": "Remark",
  "number": "2.6.6",
  "title": "",
  "body": " The Bolzano-Weierstrass\/Ascolli-Arzel property has extensions to function spaces where the convergence is not uniform but in integral norms. We first describe a generalization in the context of the space , defined for as the space of infinite sequences such that we note that, for , if a sequence converges to some in , then for any , there exists such that and there exists some such that for , This then implies, by Minkowski's inequality, that For the finite number of elements , we can certainly find some such that, for , so   This turns out to be also a sufficient condition in order to extract a convergent subsequence in . We formulate the condition more precisely in the following.  "
},
{
  "id": "equicontinuity-8",
  "level": "2",
  "url": "equicontinuity.html#equicontinuity-8",
  "type": "Definition",
  "number": "2.6.7",
  "title": "Equi-summable Family in <span class=\"process-math\">\\(l^{p}\\)<\/span>.",
  "body": "Equi-summable Family in   A family of elements in is said to be equi-summable in , if for any , there exists such that    "
},
{
  "id": "lpcomp",
  "level": "2",
  "url": "equicontinuity.html#lpcomp",
  "type": "Theorem",
  "number": "2.6.8",
  "title": "(Sequential) Compactness Condition in <span class=\"process-math\">\\(l^{p}\\)<\/span>.",
  "body": "(Sequential) Compactness Condition in  For , a sequence has a subsequence converging in iff this sequence is equisummable in .  "
},
{
  "id": "equicontinuity-10",
  "level": "2",
  "url": "equicontinuity.html#equicontinuity-10",
  "type": "Exercise",
  "number": "2.6.9",
  "title": "",
  "body": "Prove that is a complete metric space. "
},
{
  "id": "equicontinuity-11",
  "level": "2",
  "url": "equicontinuity.html#equicontinuity-11",
  "type": "Exercise",
  "number": "2.6.10",
  "title": "",
  "body": "Provide a proof of . "
},
{
  "id": "SW",
  "level": "1",
  "url": "SW.html",
  "type": "Section",
  "number": "2.7",
  "title": "Weierstrass Theorem",
  "body": "Weierstrass Theorem  Weierstrass Theorem  Let . Every continuous can be uniformly approximated by polynomials. In other words, for every continuous there is a sequence of polynomials so that     The proof of introduces a very useful idea in analysis: convolution and approximation of identity .  First, a reduction is done so that we may assume , and . Next we extend to be for , so that it becomes a continuous function on . Then we define the following convolution of  where will be a polynomial , chosen to satisfy the following three properties:   .  for all .  For any as .    Since is a polynomial in , it is clear that is also a polynomial in , and using for or , we see that, for ,   This indicates that is a weighted average of , with more weight near due to item (3) above. We now use items (1)--(3) to see that Now for any , using the uniform continuity of , we find a , such that , for all . Then use this in the above, and item (3), there exists some such that for we have , and it follows that   Finally, we can check that, with , and chosen to satisfy item (2) above, then items (1) and (3) also hold---for item (3), we need to verify that for any ,   This technique can be extended to the case of continuous functions on a compact subset of ---after the integration theory has been extended to that context. In the case of , the 's will be polynomials in and , not in , as one may think that a polynomial in should be the general extension of a polynomial in .   Question  If , can the proof above be adapted to prove that there exists a sequence of polynomials such that    "
},
{
  "id": "WThm",
  "level": "2",
  "url": "SW.html#WThm",
  "type": "Theorem",
  "number": "2.7.1",
  "title": "Weierstrass Theorem.",
  "body": "Weierstrass Theorem  Let . Every continuous can be uniformly approximated by polynomials. In other words, for every continuous there is a sequence of polynomials so that    "
},
{
  "id": "SW-8",
  "level": "2",
  "url": "SW.html#SW-8",
  "type": "Remark",
  "number": "2.7.2",
  "title": "",
  "body": "This technique can be extended to the case of continuous functions on a compact subset of ---after the integration theory has been extended to that context. In the case of , the 's will be polynomials in and , not in , as one may think that a polynomial in should be the general extension of a polynomial in .  "
},
{
  "id": "ch-SSFunctions-10",
  "level": "1",
  "url": "ch-SSFunctions-10.html",
  "type": "Exercises",
  "number": "2.8",
  "title": "Exercises",
  "body": " Exercises   Prove that, for any finite , the set is compact in .    Suppose that is a sequence of real valued functions defined on a compact set such that  Each is continuous on ,   converges pointwise to some continuous  on ,   for all and .  Show that uniformly on .  Question : Can the compactness of be dropped? Where is the continuity of the limit function in condition (b) used? Can it be dropped?   A proof using open covering argument  From the assumptions, we know that for any given , and any , there exist and such that , , where stands for the neighborhood of .  Take , then, using the continuity of at , there exists some , such that Set , then for all , we have . Furthermore, using the assumption that for any , we conclude that , and   Now forms an open cover of . Using the compactness of , we find a finite subcover of for some . Set . Then for any , we have for some , therefore, for all , we have , which concludes our proof.  The above proof can be written in a more compact way. For any , using the continuity of , we know that the set is open. Since for any , as , we conclude that for some . Thus is an open over of . By the compactness of , there exists some finite subcover. Since for , we have in fact for some , which implies that for all and all      Investigate the differentiability of at   Note that is an even function of , so if exists, we would have . Examine the difference quotient of at to see whether it converges to .   First we have   Note that for , is a Riemann sum for the improper integral , so we expect    does not directly apply here. One way to justify the assertion above is to use the divide-and-conquer strategy. For any given, first we find such that Then, we break the summation into and . We estimate Finally, the summation is a Riemann sum for the proper Riemann integral , so as the step size , we have   This justifies the limiting process above and concludes that Similarly, Thus does not exist. This proves indirectly that the series for can't converge uniformly in a neighborhood of .    "
},
{
  "id": "lpcptset",
  "level": "2",
  "url": "ch-SSFunctions-10.html#lpcptset",
  "type": "Exercise",
  "number": "2.8.1",
  "title": "",
  "body": " Prove that, for any finite , the set is compact in .  "
},
{
  "id": "uniformconvcontim",
  "level": "2",
  "url": "ch-SSFunctions-10.html#uniformconvcontim",
  "type": "Exercise",
  "number": "2.8.2",
  "title": "",
  "body": " Suppose that is a sequence of real valued functions defined on a compact set such that  Each is continuous on ,   converges pointwise to some continuous  on ,   for all and .  Show that uniformly on .  Question : Can the compactness of be dropped? Where is the continuity of the limit function in condition (b) used? Can it be dropped?   A proof using open covering argument  From the assumptions, we know that for any given , and any , there exist and such that , , where stands for the neighborhood of .  Take , then, using the continuity of at , there exists some , such that Set , then for all , we have . Furthermore, using the assumption that for any , we conclude that , and   Now forms an open cover of . Using the compactness of , we find a finite subcover of for some . Set . Then for any , we have for some , therefore, for all , we have , which concludes our proof.  The above proof can be written in a more compact way. For any , using the continuity of , we know that the set is open. Since for any , as , we conclude that for some . Thus is an open over of . By the compactness of , there exists some finite subcover. Since for , we have in fact for some , which implies that for all and all     "
},
{
  "id": "ch-SSFunctions-10-4",
  "level": "2",
  "url": "ch-SSFunctions-10.html#ch-SSFunctions-10-4",
  "type": "Exercise",
  "number": "2.8.3",
  "title": "",
  "body": "Investigate the differentiability of at   Note that is an even function of , so if exists, we would have . Examine the difference quotient of at to see whether it converges to .   First we have   Note that for , is a Riemann sum for the improper integral , so we expect    does not directly apply here. One way to justify the assertion above is to use the divide-and-conquer strategy. For any given, first we find such that Then, we break the summation into and . We estimate Finally, the summation is a Riemann sum for the proper Riemann integral , so as the step size , we have   This justifies the limiting process above and concludes that Similarly, Thus does not exist. This proves indirectly that the series for can't converge uniformly in a neighborhood of .   "
},
{
  "id": "sec_psradius",
  "level": "1",
  "url": "sec_psradius.html",
  "type": "Section",
  "number": "3.1",
  "title": "Definition of a Power Series and Its Radius of Convergence",
  "body": " Definition of a Power Series and Its Radius of Convergence   Definition of a Power Series   A power series centered at is a series of the form for some coefficients .    A basic property of a power series is the following   Absolute and Uniform Convergence of a Power Series  Suppose that the power series converges at some . Then it converges absolutely at any with . In fact, for any , the series converges absolutely and uniformly for such that .    Under the assumption that the power series converges at , we know that as . Thus there exists some such that for all .  For any with , we can find some such that . In fact, for any , it follows from for all with and the comparison test with the geometric series that converges absolutely and uniformly for such that . Since we can take any such , we conclude that converges absolutely at any with .     The proof above shows that the Proposition holds for any complex such that so the domain of convergence is a round disc centered at . The the disc with radius is the largest disc centered at in which the power series converges.   Radius of Convergence of a Power Series   For any power series , we define as the radius of convergence of this power series.     Note that could be or , and that, if , then    Formula for the Radius of Convergence of a Power Series  For any power series , its radius of convergence is given by the relation where we take when and take when .    This follows from the root test: when the power series converges absolutely, while when , it diverges, for, this condition would imply the existence of a subsequence such that , which would then imply , so can't converge at such an .    Whether converges for with depends on the particular series, as shown by the following examples All three have as their radius of convergence; but the first series diverges at , the second series converges (conditionally) at but diverges at , and the third series converges absolutely for all with . Moreover, even though does not converge at , as , . What about the limiting behavior of as ? This is answered by the Abel's Theorem to be discussed in the next section.  Since may not always be easy to evaluate, one often needs to provide an estimate for it.    Prove that . (One may assume that for all ; for, otherwise, the right hand side is .)  Prove that .  If exists, then exists, and equals . (The converse is not true; construct some examples.)    The radius of convergence of the power series satisfies      In computing the radius of convergence of a power series, one often has to make some adaptation. For instance, to determine the radius of convergence of if one applies the radius of convergence formula directly, then one needs to identify and evaluate , which would involve evaluation of , which can be done but requires some work. One could apply the ratio test but needs some adaptation, as for all even 's. One could treat as the -th term, in stead of -th term. Then one only needs to make sure that This turns out to hold for any . Thus the radius of convergence here is .    Radius of Convergence of a Power Series   Suppose that the radius of convergence of is . What is the radius of convergence of the series and respectively?    "
},
{
  "id": "PSdef",
  "level": "2",
  "url": "sec_psradius.html#PSdef",
  "type": "Definition",
  "number": "3.1.1",
  "title": "Definition of a Power Series.",
  "body": " Definition of a Power Series   A power series centered at is a series of the form for some coefficients .   "
},
{
  "id": "sec_psradius-4",
  "level": "2",
  "url": "sec_psradius.html#sec_psradius-4",
  "type": "Proposition",
  "number": "3.1.2",
  "title": "Absolute and Uniform Convergence of a Power Series.",
  "body": " Absolute and Uniform Convergence of a Power Series  Suppose that the power series converges at some . Then it converges absolutely at any with . In fact, for any , the series converges absolutely and uniformly for such that .    Under the assumption that the power series converges at , we know that as . Thus there exists some such that for all .  For any with , we can find some such that . In fact, for any , it follows from for all with and the comparison test with the geometric series that converges absolutely and uniformly for such that . Since we can take any such , we conclude that converges absolutely at any with .   "
},
{
  "id": "sec_psradius-5",
  "level": "2",
  "url": "sec_psradius.html#sec_psradius-5",
  "type": "Remark",
  "number": "3.1.3",
  "title": "",
  "body": " The proof above shows that the Proposition holds for any complex such that so the domain of convergence is a round disc centered at . The the disc with radius is the largest disc centered at in which the power series converges.  "
},
{
  "id": "sec_psradius-6",
  "level": "2",
  "url": "sec_psradius.html#sec_psradius-6",
  "type": "Definition",
  "number": "3.1.4",
  "title": "Radius of Convergence of  a Power Series.",
  "body": "Radius of Convergence of a Power Series   For any power series , we define as the radius of convergence of this power series.   "
},
{
  "id": "sec_psradius-7",
  "level": "2",
  "url": "sec_psradius.html#sec_psradius-7",
  "type": "Remark",
  "number": "3.1.5",
  "title": "",
  "body": " Note that could be or , and that, if , then   "
},
{
  "id": "sec_psradius-8",
  "level": "2",
  "url": "sec_psradius.html#sec_psradius-8",
  "type": "Theorem",
  "number": "3.1.6",
  "title": "Formula for the Radius of Convergence of a Power Series.",
  "body": "Formula for the Radius of Convergence of a Power Series  For any power series , its radius of convergence is given by the relation where we take when and take when .    This follows from the root test: when the power series converges absolutely, while when , it diverges, for, this condition would imply the existence of a subsequence such that , which would then imply , so can't converge at such an .   "
},
{
  "id": "sec_psradius-11",
  "level": "2",
  "url": "sec_psradius.html#sec_psradius-11",
  "type": "Exercise",
  "number": "3.1.7",
  "title": "",
  "body": "  Prove that . (One may assume that for all ; for, otherwise, the right hand side is .)  Prove that .  If exists, then exists, and equals . (The converse is not true; construct some examples.)  "
},
{
  "id": "sec_psradius-12",
  "level": "2",
  "url": "sec_psradius.html#sec_psradius-12",
  "type": "Proposition",
  "number": "3.1.8",
  "title": "",
  "body": " The radius of convergence of the power series satisfies    "
},
{
  "id": "sec_psradius-13",
  "level": "2",
  "url": "sec_psradius.html#sec_psradius-13",
  "type": "Remark",
  "number": "3.1.9",
  "title": "",
  "body": " In computing the radius of convergence of a power series, one often has to make some adaptation. For instance, to determine the radius of convergence of if one applies the radius of convergence formula directly, then one needs to identify and evaluate , which would involve evaluation of , which can be done but requires some work. One could apply the ratio test but needs some adaptation, as for all even 's. One could treat as the -th term, in stead of -th term. Then one only needs to make sure that This turns out to hold for any . Thus the radius of convergence here is .  "
},
{
  "id": "sec_psradius-14",
  "level": "2",
  "url": "sec_psradius.html#sec_psradius-14",
  "type": "Exercise",
  "number": "3.1.10",
  "title": "Radius of Convergence of a Power Series.",
  "body": " Radius of Convergence of a Power Series   Suppose that the radius of convergence of is . What is the radius of convergence of the series and respectively?   "
},
{
  "id": "sec-psproperties",
  "level": "1",
  "url": "sec-psproperties.html",
  "type": "Section",
  "number": "3.2",
  "title": "Properties of a Convergent Power Series",
  "body": " Properties of a Convergent Power Series  Abel Theorem for a Power Series  Suppose that the power series converges at . Then it converges uniformly over the closed interval from to . As a consequence     Set and consider the power series in . Then it equals the given power series at with and converges at . It suffices to prove that converges uniformly over .  Set for and . Then under our assumption as . For , we have Sending and using gives us For any , let be such that for , we have . Then If we take real such that , then , and we can find some such that when , we have . This shows that as . Note that the above argument works even for complex as long as we restrict to satisfy for some . This is the case as long as from within the unit disc in a non-tangential way.    Abel's Theorem is a form of interchange of limits. Suppose that the series converges at one end, say at , then the Theorem implies that for  is a continuous function of . As a consequence, This can also be written as    Term-wise Integration of a Convergent Power Series  Suppose that the radius of convergence of the power series is non zero. Then for any ,     This follows simply using the knowledge that the power series converges uniformly for such that .    The series  It arises from the geometric series replacing by when : Its radius of convergence is . Thus for any , we have Using calculus knowledge that , and the series on the right converges at , implies that     Infinite Differentiability of a Convergent Power Series  Suppose that the radius of convergence of the power series is non zero. Then the power series defines an infinitely many times differentiable function of for , and for all  and     One simply notes that the series converges iff the series converges, so these two series have the same radii of convergence. But the radius of convergence of the latter is given by using . As a result, for any , the series converges uniformly over such that , and we can can apply the theorem on a sequence of functions whose derivative sequence converges uniformly to conclude that holds for . Since this holds for any , we conclude that holds for . The rest cases for follow by repeating this procedure.     The previous Theorem reveals that a convergent power series in is the Taylor series of the power series at . This raises the question: whether any infinitely differentiable function can be represented near any point in its domain as a convergent power series in ?  If this holds true for such a function , the power series must be the Taylor series of at . This raises a related question: does the Taylor series at any in its domain of an infinitely differentiable function always converge? It turns out that, even if this Taylor series converges, the convergent power series may not be equal to   If is infinitely differentiable near , then the Taylor expansion with remainder term gives us, for any , for some between and . So our questions above boil down to whether as . This clearly requires some control on .   An infinitely differentiable function which does not equal its Taylor series at some point  Consider Verify that this is infinitely differentiable and for all . Note that its Taylor series at is identically so can't equal for . We remark that if we choose any , then it turns out that equals its Taylor series at in a neighborhood of .   A Convergent Power Series' Expansion at a Different Center  Suppose that the radius of convergence of the power series is non zero and satisfies . Let . Then the following holds at least for all such that , where     We use the binomial expansion to write the power series as a doubly indexed series. We show that this doubly indexed series converges absolutely for any such that . As a result, we can exchange the order of summation to obtain which is the desired .  The absolute convergence of the doubly indexed series is seen by noting that and that under our assumption , and the knowledge that the series converges for any .     It is possible for the radius of convergence of the power series to be greater than , as seen in the case of and , where, instead of computing the Taylor series of centered at , we can use a geometric series to expand as which converges as long as .   A Non-zero Convergent Power Series Has Isolated Zeroes  Suppose that the radius of convergence of the power series is non zero, and that it has a sequence of distinct zeroes approaching some with , then it must be identically for all with .    We first represent the series as a power series in for by . We argue by contradiction. Suppose that the series is not identically , then there is a smallest integer such that . It follows that The series has the same non-zero radius of convergence, , as that for , so defines a continuous function in a neighborhood of . Since , we conclude that in a neighborhood of . But this would mean that has no zero beside in this neighborhood, contradicting our assumption that a sequence of zeroes of approach . This shows that under our assumption the power series must have all its , and that it equals for all such that .  The above argument applies to any with when is a limit point of the set of zeroes of the power series. Let be the set of such points in . Then is a non-empty closed subset of the disc . But the above argument shows that is also open. This then implies that must consists of all points of the disc , therefore, the power series equals in this entire disc.    In the above theorem, it is important that the limit point referred to is in the disc of convergence of the power series. The function has a convergent power series expansion at with radius of convergence equal to , and for , yet .    Product of Two Power Series  Suppose that and are two power series converging for . Then has a power series expansion in converging for , and is the Cauchy product of the sequence and .    For any with , we know that both and converge absolutely, so equals the Cauchy product given as     Combining this Theorem and Abel's Theorem gives us   Suppose that , , and all converge, where is the Cauchy product of sequence and . Then     Set and . Then the two power series converge at . Thus for all with . Abel Theorem is applicable to all three power series here for , so      The condition that all three series converge can't be dropped. For the case that , it turns out that the series of the Cauchy product does not converge.    It can be proved that the quotient of two convergent power series centered at some has a convergent power series expansion centered at in some neighborhood of , provided that the denominator does not vanish at . Similarly it can be proved that if has a convergent power series expansion centered at with , and has a convergent power series expansion centered at , then the composition has a convergent power series expansion centered at .   "
},
{
  "id": "thm-Abel",
  "level": "2",
  "url": "sec-psproperties.html#thm-Abel",
  "type": "Theorem",
  "number": "3.2.1",
  "title": "Abel Theorem for a Power Series.",
  "body": "Abel Theorem for a Power Series  Suppose that the power series converges at . Then it converges uniformly over the closed interval from to . As a consequence     Set and consider the power series in . Then it equals the given power series at with and converges at . It suffices to prove that converges uniformly over .  Set for and . Then under our assumption as . For , we have Sending and using gives us For any , let be such that for , we have . Then If we take real such that , then , and we can find some such that when , we have . This shows that as . Note that the above argument works even for complex as long as we restrict to satisfy for some . This is the case as long as from within the unit disc in a non-tangential way.   "
},
{
  "id": "sec-psproperties-3",
  "level": "2",
  "url": "sec-psproperties.html#sec-psproperties-3",
  "type": "Remark",
  "number": "3.2.2",
  "title": "",
  "body": "Abel's Theorem is a form of interchange of limits. Suppose that the series converges at one end, say at , then the Theorem implies that for  is a continuous function of . As a consequence, This can also be written as   "
},
{
  "id": "thm-psintegrate",
  "level": "2",
  "url": "sec-psproperties.html#thm-psintegrate",
  "type": "Theorem",
  "number": "3.2.3",
  "title": "Term-wise Integration of a Convergent Power Series.",
  "body": "Term-wise Integration of a Convergent Power Series  Suppose that the radius of convergence of the power series is non zero. Then for any ,     This follows simply using the knowledge that the power series converges uniformly for such that .   "
},
{
  "id": "sec-psproperties-5",
  "level": "2",
  "url": "sec-psproperties.html#sec-psproperties-5",
  "type": "Example",
  "number": "3.2.4",
  "title": "The series <span class=\"process-math\">\\(\\sum_{n=0}^{\\infty} (-x^2)^n \\)<\/span>.",
  "body": "The series  It arises from the geometric series replacing by when : Its radius of convergence is . Thus for any , we have Using calculus knowledge that , and the series on the right converges at , implies that   "
},
{
  "id": "sec-psproperties-6",
  "level": "2",
  "url": "sec-psproperties.html#sec-psproperties-6",
  "type": "Theorem",
  "number": "3.2.5",
  "title": "Infinite Differentiability of a Convergent Power Series.",
  "body": " Infinite Differentiability of a Convergent Power Series  Suppose that the radius of convergence of the power series is non zero. Then the power series defines an infinitely many times differentiable function of for , and for all  and     One simply notes that the series converges iff the series converges, so these two series have the same radii of convergence. But the radius of convergence of the latter is given by using . As a result, for any , the series converges uniformly over such that , and we can can apply the theorem on a sequence of functions whose derivative sequence converges uniformly to conclude that holds for . Since this holds for any , we conclude that holds for . The rest cases for follow by repeating this procedure.   "
},
{
  "id": "sec-psproperties-7",
  "level": "2",
  "url": "sec-psproperties.html#sec-psproperties-7",
  "type": "Remark",
  "number": "3.2.6",
  "title": "",
  "body": " The previous Theorem reveals that a convergent power series in is the Taylor series of the power series at . This raises the question: whether any infinitely differentiable function can be represented near any point in its domain as a convergent power series in ?  If this holds true for such a function , the power series must be the Taylor series of at . This raises a related question: does the Taylor series at any in its domain of an infinitely differentiable function always converge? It turns out that, even if this Taylor series converges, the convergent power series may not be equal to   If is infinitely differentiable near , then the Taylor expansion with remainder term gives us, for any , for some between and . So our questions above boil down to whether as . This clearly requires some control on .  "
},
{
  "id": "sec-psproperties-8",
  "level": "2",
  "url": "sec-psproperties.html#sec-psproperties-8",
  "type": "Exercise",
  "number": "3.2.7",
  "title": "An infinitely differentiable function which does not equal its Taylor series at some point.",
  "body": "An infinitely differentiable function which does not equal its Taylor series at some point  Consider Verify that this is infinitely differentiable and for all . Note that its Taylor series at is identically so can't equal for . We remark that if we choose any , then it turns out that equals its Taylor series at in a neighborhood of .  "
},
{
  "id": "sec-psproperties-9",
  "level": "2",
  "url": "sec-psproperties.html#sec-psproperties-9",
  "type": "Theorem",
  "number": "3.2.8",
  "title": "A Convergent Power Series’ Expansion at a Different Center.",
  "body": "A Convergent Power Series' Expansion at a Different Center  Suppose that the radius of convergence of the power series is non zero and satisfies . Let . Then the following holds at least for all such that , where     We use the binomial expansion to write the power series as a doubly indexed series. We show that this doubly indexed series converges absolutely for any such that . As a result, we can exchange the order of summation to obtain which is the desired .  The absolute convergence of the doubly indexed series is seen by noting that and that under our assumption , and the knowledge that the series converges for any .   "
},
{
  "id": "sec-psproperties-10",
  "level": "2",
  "url": "sec-psproperties.html#sec-psproperties-10",
  "type": "Remark",
  "number": "3.2.9",
  "title": "",
  "body": " It is possible for the radius of convergence of the power series to be greater than , as seen in the case of and , where, instead of computing the Taylor series of centered at , we can use a geometric series to expand as which converges as long as .  "
},
{
  "id": "sec-psproperties-11",
  "level": "2",
  "url": "sec-psproperties.html#sec-psproperties-11",
  "type": "Theorem",
  "number": "3.2.10",
  "title": "A Non-zero Convergent Power Series Has Isolated Zeroes.",
  "body": "A Non-zero Convergent Power Series Has Isolated Zeroes  Suppose that the radius of convergence of the power series is non zero, and that it has a sequence of distinct zeroes approaching some with , then it must be identically for all with .    We first represent the series as a power series in for by . We argue by contradiction. Suppose that the series is not identically , then there is a smallest integer such that . It follows that The series has the same non-zero radius of convergence, , as that for , so defines a continuous function in a neighborhood of . Since , we conclude that in a neighborhood of . But this would mean that has no zero beside in this neighborhood, contradicting our assumption that a sequence of zeroes of approach . This shows that under our assumption the power series must have all its , and that it equals for all such that .  The above argument applies to any with when is a limit point of the set of zeroes of the power series. Let be the set of such points in . Then is a non-empty closed subset of the disc . But the above argument shows that is also open. This then implies that must consists of all points of the disc , therefore, the power series equals in this entire disc.   "
},
{
  "id": "sec-psproperties-12",
  "level": "2",
  "url": "sec-psproperties.html#sec-psproperties-12",
  "type": "Remark",
  "number": "3.2.11",
  "title": "",
  "body": "In the above theorem, it is important that the limit point referred to is in the disc of convergence of the power series. The function has a convergent power series expansion at with radius of convergence equal to , and for , yet .  "
},
{
  "id": "sec-psproperties-13",
  "level": "2",
  "url": "sec-psproperties.html#sec-psproperties-13",
  "type": "Theorem",
  "number": "3.2.12",
  "title": "Product of  Two Power Series.",
  "body": " Product of Two Power Series  Suppose that and are two power series converging for . Then has a power series expansion in converging for , and is the Cauchy product of the sequence and .    For any with , we know that both and converge absolutely, so equals the Cauchy product given as    "
},
{
  "id": "sec-psproperties-15",
  "level": "2",
  "url": "sec-psproperties.html#sec-psproperties-15",
  "type": "Corollary",
  "number": "3.2.13",
  "title": "",
  "body": " Suppose that , , and all converge, where is the Cauchy product of sequence and . Then     Set and . Then the two power series converge at . Thus for all with . Abel Theorem is applicable to all three power series here for , so    "
},
{
  "id": "sec-psproperties-16",
  "level": "2",
  "url": "sec-psproperties.html#sec-psproperties-16",
  "type": "Remark",
  "number": "3.2.14",
  "title": "",
  "body": " The condition that all three series converge can't be dropped. For the case that , it turns out that the series of the Cauchy product does not converge.  "
},
{
  "id": "sec-psproperties-17",
  "level": "2",
  "url": "sec-psproperties.html#sec-psproperties-17",
  "type": "Remark",
  "number": "3.2.15",
  "title": "",
  "body": " It can be proved that the quotient of two convergent power series centered at some has a convergent power series expansion centered at in some neighborhood of , provided that the denominator does not vanish at . Similarly it can be proved that if has a convergent power series expansion centered at with , and has a convergent power series expansion centered at , then the composition has a convergent power series expansion centered at .  "
},
{
  "id": "sec-exponential",
  "level": "1",
  "url": "sec-exponential.html",
  "type": "Section",
  "number": "3.3",
  "title": "Exponential Functions",
  "body": " Exponential Functions  The discussion of the previous section applies to general power series. It is more interesting to discuss some special power series that arise from important applications or have special properties. The exponential and logarithmic functions are two families of such functions.  In most elementary calculus treatment, the definition of the exponential functions and proof of their properties use some hand waving at some points; similarly, the definition and properties of the trigonometric functions rely on some geometric arguments, instead of purely analytical ones. It should be a rewarding experience to review such a treatment and pinpoint such places.  The exponential functions arise most naturally as solutions of the ODE . In looking for a solution of the form , one finds from which one concludes that . Then by induction one gets Thus should be a solution with . To justify the argument, one checks that this power series has its radius of convergence equal to , so all the derivations are justified.  How was the solution introduced in calculus? And how does this power series solution relate to ? Is this the only solution with ?  The answer lies in developing properties of this solution. Denoting . The key properties are   It then follows that for any , so for any (even complex valued). When takes real values, also takes real values by construction. For , the power series for shows that . One then shows using that for all real . Then the property shows that is monotone increasing for real valued .  At this point, there is a well defined inverse function of for . Call it for . Then and . It remains to establish that is defined for all . As a consequence of , we will have for .  Based on the properties of , one establishes that for any rational , If one can establish that the function is well defined for any real and any real and that it is a continuous function for , then one can use the continuity to show that the above equality holds for all . However it is not a trivial task to define for any real and any real and prove that it is a continuous function of .  Recall that there is an arithmetic procedure for computing and only when are rational numbers and is an integer, that the definition of for any positive real (even a rational number) and positive integer requires a limiting process and completeness of . Once this is defined, one can use the continuity and monotonicity of the power function for any positive integer and positive real to define for any positive real and positive integers , namely, for any positive real and positive rational . Additional work is needed to define for any positive real and any real , as was done in Exercise 6 of Chapter 1 of Rudin's text for the case of .  Using properties of power series, the definition and properties of can be developed in a routine way, which is how Rudin develops this material. Rudin also sketches an argument to show that the treatment following Exercise 6 of Chapter 1 produces the same function as that using .   "
},
{
  "id": "ch-powerseries-5",
  "level": "1",
  "url": "ch-powerseries-5.html",
  "type": "Section",
  "number": "3.4",
  "title": "The Trigonometric Functions",
  "body": "The Trigonometric Functions  The trigonometric functions arise from geometric considerations. It was Euler who discovered the relation between the trigonometric functions and the exponential function as encoded in the Euler formula    is defined in terms of the power series expansion For real valued , splitting the above series into its real and imaginary parts, we obtain But the series converges for all complex valued , so we also define and for complex valued using the above series.  Note that the definitions for these trigonometric functions are in purely analytic means, thus these trigonometric functions as defined this way do not directly have relations with the ones defined geometrically. Rudin's development follows this approach and does not use any of the properties as given by the geometric approach. For instance, he sets out to prove that has a purely imaginary period, labeled as , and use this to show that both and also have as their period; but the here does not have a direct relation with the angle interpretation in geometry. This kind of treatment is fine for a rigorous development of calculus, but should not be taken as a discouragement from relating to the geometric approach. In fact it is much more productive to fully use the geometric interpretation; one just needs to be ware of the places where a certain geometric properties play a crucial role and how those arguments can be replaced by purely analytical ones.  "
},
{
  "id": "exe-ps",
  "level": "1",
  "url": "exe-ps.html",
  "type": "Exercises",
  "number": "3.5",
  "title": "Exercises",
  "body": "  Binomial Power Series Expansion  For any real number and nonnegative integer , define . Show that the radius of convergence of the power series equals . Then show that for .   Estimate the remainder term in the Taylor expansion of .     Suppose that the power series has radius of convergence equal to , that each and that . Show that .     Composition of Convergent Power Series  Suppose that the power series has a positive radius of convergence, and also has a positive radius of convergence . Prove that for all such that , the composite function has a convergent power series expansion of the form , where and for positive integer , with defined from the relation .   Substitute into the power series expansion of in and justify the interchange of order of summation.    "
},
{
  "id": "exe-ps-1",
  "level": "2",
  "url": "exe-ps.html#exe-ps-1",
  "type": "Exercise",
  "number": "3.5.1",
  "title": "Binomial Power Series Expansion.",
  "body": " Binomial Power Series Expansion  For any real number and nonnegative integer , define . Show that the radius of convergence of the power series equals . Then show that for .   Estimate the remainder term in the Taylor expansion of .   "
},
{
  "id": "exe-ps-2",
  "level": "2",
  "url": "exe-ps.html#exe-ps-2",
  "type": "Exercise",
  "number": "3.5.2",
  "title": "",
  "body": " Suppose that the power series has radius of convergence equal to , that each and that . Show that .   "
},
{
  "id": "exe-ps-3",
  "level": "2",
  "url": "exe-ps.html#exe-ps-3",
  "type": "Exercise",
  "number": "3.5.3",
  "title": "Composition of Convergent Power Series.",
  "body": " Composition of Convergent Power Series  Suppose that the power series has a positive radius of convergence, and also has a positive radius of convergence . Prove that for all such that , the composite function has a convergent power series expansion of the form , where and for positive integer , with defined from the relation .   Substitute into the power series expansion of in and justify the interchange of order of summation.   "
},
{
  "id": "sec-orthogonal",
  "level": "1",
  "url": "sec-orthogonal.html",
  "type": "Section",
  "number": "4.1",
  "title": "General Orthogonal Expansion",
  "body": " General Orthogonal Expansion  The notion of mean square convergence makes senes in a general inner product space.  Inner Product Space   A vector space over the reals is called an inner product space if there is a function such that    for any and any ;   for any ;   for any and equals iff .      Note that the first two properties imply Due to this and the first property, we say an inner product on a vector over the reals is bilinear .  The space of real valued continuous function on a finite interval , , has a natural inner product: .  Orthogonal Relation   Two vectors in an inner product space are said to be orthogonal to each other if .    Note that, since , it follows that if , then . So the orthogonal relation is symmetric in and .  In the context of , two functions are orthogonal in if . Note that it is important to specify the interval of integration. The orthogonality relation stated earlier says that, when , the functions are orthogonal on . But these two functions may not be orthogonal on a different interval such as .  Basic Properties of an Inner Product Space  Suppose that is an inner product space over the reals . Then the Cauchy-Schwarz inequality holds:  defines a norm on :   for all and equals iff in ;   for all and real ;   for all (Triangle Inequality).  When , namely, when is orthogonal to in , we also have the Pythagorean relation:     For any , the function in is a quadratic function in when due to the bilinear property of the inner product, and is nonnegative. Its minimum is attained at . Evaluating at this gives This proves the Cauchy-Schwarz inequality when . But the case of is trivial.  The triangle inequality follows from the Cauchy-Schwarz inequality by The Pythagorean relation clearly follows from the above line of proof when .    In the context of , the Cauchy-Schwarz inequality takes the form of for , and the triangle inequality takes the form of    A Set of Functions Orthogonal on   Verify that the set of functions are mutually orthogonal to each other on and that Then show that     Use the relation .   A Set of Functions Orthogonal on  Verify that the set of functions are mutually orthogonal to each other on and that Then show that    Use the relations .    It is often necessary and productive to work with spaces of complex valued functions, which should be regarded as vector spaces over . The notion of an inner product can be extended to a vector space over , with some modification.  Hermitian Inner Product Space   A vector space over is called a Hermitian inner product space if there is a function such that  for any and any ;   for any ;   is a nonnegative real number for any and equals iff .    Two vectors are (Hermitian) orthogonal if .    Note that the first two properties imply Note that a Hermitian inner product on a vector space is not bilinear in both variables; it is linear in the first variable, but complex conjugate linear in the second variable.  The Cauchy-Schwarz and triangle inequalities and the notion of norm induced by the inner product extend readily to a Hermitian inner product space.  To distinguish between a Hermitian inner product and an inner product introduced earlier on a vector space over the reals, we will refer to the latter as a Euclidean inner product.  For complex valued functions in , a natural Hermitian inner product is . This is consistent with the inner product introduced earlier on when are real valued.  The Orthogonal Family on  Verify that the set of functions are orthogonal on and that Then show that     Two modifications are made in the defining properties of a Hermitian inner product: (i). allowing to take complex values, and (ii). replacing the symmetry property by the complex conjugate symmetry property .  These are based on the following considerations. (a). It is preferable to keep some complex linearity for an inner product on a vector space over such as given in the first property of an inner product, and this makes it necessary to allow to take complex values. (b). We still would like to use as a norm for a vector, thus we need to be a nonnegative real number for any .  Let denote, respectively, the real and imaginary parts of : Then we need for all . This property, coupled with linearity over , implies that must be antisymmetric in . In fact, it makes sense to require to be an inner product on treating as a vector space over . Thus we want to be symmetric in . An additional desired property is that multiplication by on both and should preserve the inner product:   It turns out that these desired properties are encoded in, in fact, equivalent to the defining properties for a Hermitian inner product.   Hermitian and Euclidean Inner Product  Use the set up of for a Hermitian inner product. Verify that   for all .   for all .  for all .  for all .    Conversely, if is an inner product on as a vector space over the reals, and satisfies for all . Then define and for all . Verify that this is a Hermitian inner product on . In other words, a Hermitian inner product is always associated with a Euclidean inner product which is preserved by multiplication by .     When two vectors are orthogonal in a complex vector space with a Hermitian inner product, the Pythagorean relation holds in the same way as for case in a vector space with a Euclidean inner product. In this sense it is a proper generalization of the orthogonal relation in Euclidean geometry. On the other hand, there is a subtle difference: suppose is an orthonormal basis of a complex vector space with a Hermitian inner product, then and are not orthogonal in this Hermitian inner product; on the other hand, if we endow with the indued Euclidean inner product as discussed above, then and are orthogonal in ; in fact, becomes an orthonormal basis for this inner product . This is the case for the canonical Hermitian metric on , where , so , while in the geometric representation of complex numbers, are orthogonal---they are orthogonal in the induced inner product, which is the standard Euclidean inner product.   In the following we will not distinguish between a Hermitian inner product and a Euclidean inner product, and will let the context to imply the appropriate one.  Orthogonal systems of functions often arise as eigenfunctions of a self-adjoint differential operator, which is the analogue of real symmetric matrices or Hermitian matrices whose eigenvectors associated to distinct eigenvalues are automatically orthogonal to each other. For example, each function in is an eigenfunction of the following problem: for and , ; each in the family is an eigenfunction of the following problem: for and . In each case, the operator is self-adjoint in the sense that the inner product of with equals the inner product of with (the boundary conditions play an essential role here), and this leads to the orthogonality of eigenfunctions associated to distinct eigenvalues.   Orthonormal Vectors   A set of vectors (finite or infinite) in an inner product space is called an orthonormal set, if any two distinct vectors in this set are orthogonal to each other and each one is a unit vector.    Fourier Coefficients and Fourier Series   Let be a set of orthonormal vectors in an inner product space . For any vector , define . Then are called the Fourier coefficients of with respect to this set of orthonormal vectors, and the series is called the Fourier series of with respect to this set of orthonormal vectors.    In the above definition the convergence of in the case of an infinite set of orthonormal vectors is not directly addressed; one either needs to show that the series converges or simply assumes it as a formal series at this point. As will be seen soon, it is also appropriate to call this sum the orthogonal projection of in the span of this set of orthonormal vectors. Note that in a setting of a set of infinite vectors, we take the span of such a set to mean the completion of the space of finite linear combination of vectors from this set, which allows us to make sense of an infinite series of such vectors.   Sometimes we work with a set of orthogonal vectors which are not necessarily unit vectors. This is the case with on . Here we modify the definition of the Fourier coefficients of by defining and as the partial sums of the Fourier series of on :   When we work with the set of orthogonal functions on , the Fourier coefficients of with respect to this set of orthogonal functions on are defined by    Find Fourier Coefficients  Find the Fourier coefficients of the functions and with respect to the set of orthogonal functions on .     Integral Representation of Fourier Partial Sums  Let denote the partial sums of the Fourier series of with respect to the set of orthogonal functions on , and let denote the Fourier coefficients of with respect to the set of orthogonal functions . Verify that where     First need to work out , then establish using either the relation or .    Best Approximation Property of Fourier Series  Let be a finite set of orthonormal vectors in an inner product space . For any vector , let be the Fourier series of with respect to this set of orthonormal vectors. Then and is orthogonal to every vector in the span of this set of orthonormal vectors. Furthermore, and namely, is closest to among all vectors in the span of this set of orthonormal vectors.    The first assertion follows directly from using the orthonormal condition .  The second assertion follows by using the orthogonality relations above using for any   Set . Then , so with equality iff for all .    Orthogonal Projection   Let be a finite set of orthonormal vectors in an inner product space . For any vector , let be the Fourier series of with respect to this set of orthonormal vectors. Then is also called the orthogonal projection of in the span of this set of orthonormal vectors.     Find Orthogonal Projections  Find the orthogonal projections of the functions and in the span of the set of orthogonal functions on .    Find the orthogonal projection of the function in the span of the set of orthogonal functions on .    Bessel's Inequality  Let be a set of orthonormal vectors in an inner product space . For any vector , let be the Fourier series of with respect to this set of orthonormal vectors. Then     Take any finite subset . Then we have already proved that Since this holds for any finite , Bessel's inequality follows immediately.     Bessel's inequality for trigonometric Fourier series  Let be the Fourier series of with respect to the set of orthogonal functions on . Then As a consequence the following Bessel's inequality holds     So far we have not addressed the issue whether converges to in the mean square sense, namely whether as . From the above we see that the answer depends on whether equality holds in the Bessel's inequality. Another possible approach is to show that there exists a sequence such that as and appeal to the Best Approximation Property of the Fourier series. This would be the case if the set of finite linear combination of functions from is dense in the mean square norm in the set of function spaces, such as or , in which we are interested in making such a Fourier series expansion.  Given any in or , using the orthogonality relations we have for . The Bessel's inequality implies then that the sequence is a Cauchy sequence in the mean square norm. At this point we need the property of completeness of the function space on which we are working. Unfortunately, neither nor is complete with respect to the mean square norm. The completion of either or turns out to the space of Lebesgue square integrable functions . So a more proper discussion on the issue of mean square convergence should be on the complete space .  Without discussing details of Lebesgue integrable functions, we may assume that there exists some such that as . We claim the following property: This follows by noting that for any , so while by the Cauchy-Schwarz inequality as , which shows that   So a key to our question is whether the only function which is orthogonal to all is the function. This discussion makes sense on a general inner product space.   A Complete (or Maximal) Orthonormal Set   A set of orthonormal vectors in an inner product space is called complete (or maximal) if the only vector orthogonal to each of these vectors is the zero vector.    "
},
{
  "id": "sec-orthogonal-3",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-3",
  "type": "Definition",
  "number": "4.1.1",
  "title": "Inner Product Space.",
  "body": "Inner Product Space   A vector space over the reals is called an inner product space if there is a function such that    for any and any ;   for any ;   for any and equals iff .     "
},
{
  "id": "sec-orthogonal-4",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "bilinear "
},
{
  "id": "sec-orthogonal-6",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-6",
  "type": "Definition",
  "number": "4.1.2",
  "title": "Orthogonal Relation.",
  "body": "Orthogonal Relation   Two vectors in an inner product space are said to be orthogonal to each other if .   "
},
{
  "id": "sec-orthogonal-9",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-9",
  "type": "Proposition",
  "number": "4.1.3",
  "title": "Basic Properties of an Inner Product Space.",
  "body": "Basic Properties of an Inner Product Space  Suppose that is an inner product space over the reals . Then the Cauchy-Schwarz inequality holds:  defines a norm on :   for all and equals iff in ;   for all and real ;   for all (Triangle Inequality).  When , namely, when is orthogonal to in , we also have the Pythagorean relation:     For any , the function in is a quadratic function in when due to the bilinear property of the inner product, and is nonnegative. Its minimum is attained at . Evaluating at this gives This proves the Cauchy-Schwarz inequality when . But the case of is trivial.  The triangle inequality follows from the Cauchy-Schwarz inequality by The Pythagorean relation clearly follows from the above line of proof when .   "
},
{
  "id": "sec-orthogonal-11",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-11",
  "type": "Exercise",
  "number": "4.1.4",
  "title": "A Set of Functions Orthogonal on <span class=\"process-math\">\\([0, l]\\)<\/span>.",
  "body": " A Set of Functions Orthogonal on   Verify that the set of functions are mutually orthogonal to each other on and that Then show that     Use the relation .  "
},
{
  "id": "sec-orthogonal-12",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-12",
  "type": "Exercise",
  "number": "4.1.5",
  "title": "A Set of Functions Orthogonal on <span class=\"process-math\">\\([-l, l]\\)<\/span>.",
  "body": "A Set of Functions Orthogonal on  Verify that the set of functions are mutually orthogonal to each other on and that Then show that    Use the relations .   "
},
{
  "id": "sec-orthogonal-14",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-14",
  "type": "Definition",
  "number": "4.1.6",
  "title": "Hermitian Inner Product Space.",
  "body": "Hermitian Inner Product Space   A vector space over is called a Hermitian inner product space if there is a function such that  for any and any ;   for any ;   is a nonnegative real number for any and equals iff .    Two vectors are (Hermitian) orthogonal if .   "
},
{
  "id": "sec-orthogonal-19",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-19",
  "type": "Exercise",
  "number": "4.1.7",
  "title": "The Orthogonal Family <span class=\"process-math\">\\(\\{ e^{i\\frac{n\\pi x}{l}}: n\\in \\bbZ\\}\\)<\/span> on <span class=\"process-math\">\\([-l, l]\\)<\/span>.",
  "body": "The Orthogonal Family on  Verify that the set of functions are orthogonal on and that Then show that    "
},
{
  "id": "sec-orthogonal-20",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-20",
  "type": "Remark",
  "number": "4.1.8",
  "title": "",
  "body": "Two modifications are made in the defining properties of a Hermitian inner product: (i). allowing to take complex values, and (ii). replacing the symmetry property by the complex conjugate symmetry property .  These are based on the following considerations. (a). It is preferable to keep some complex linearity for an inner product on a vector space over such as given in the first property of an inner product, and this makes it necessary to allow to take complex values. (b). We still would like to use as a norm for a vector, thus we need to be a nonnegative real number for any .  Let denote, respectively, the real and imaginary parts of : Then we need for all . This property, coupled with linearity over , implies that must be antisymmetric in . In fact, it makes sense to require to be an inner product on treating as a vector space over . Thus we want to be symmetric in . An additional desired property is that multiplication by on both and should preserve the inner product:   It turns out that these desired properties are encoded in, in fact, equivalent to the defining properties for a Hermitian inner product.  "
},
{
  "id": "sec-orthogonal-21",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-21",
  "type": "Exercise",
  "number": "4.1.9",
  "title": "Hermitian and Euclidean Inner Product.",
  "body": "Hermitian and Euclidean Inner Product  Use the set up of for a Hermitian inner product. Verify that   for all .   for all .  for all .  for all .    Conversely, if is an inner product on as a vector space over the reals, and satisfies for all . Then define and for all . Verify that this is a Hermitian inner product on . In other words, a Hermitian inner product is always associated with a Euclidean inner product which is preserved by multiplication by .   "
},
{
  "id": "sec-orthogonal-22",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-22",
  "type": "Remark",
  "number": "4.1.10",
  "title": "",
  "body": " When two vectors are orthogonal in a complex vector space with a Hermitian inner product, the Pythagorean relation holds in the same way as for case in a vector space with a Euclidean inner product. In this sense it is a proper generalization of the orthogonal relation in Euclidean geometry. On the other hand, there is a subtle difference: suppose is an orthonormal basis of a complex vector space with a Hermitian inner product, then and are not orthogonal in this Hermitian inner product; on the other hand, if we endow with the indued Euclidean inner product as discussed above, then and are orthogonal in ; in fact, becomes an orthonormal basis for this inner product . This is the case for the canonical Hermitian metric on , where , so , while in the geometric representation of complex numbers, are orthogonal---they are orthogonal in the induced inner product, which is the standard Euclidean inner product.  "
},
{
  "id": "sec-orthogonal-24",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-24",
  "type": "Remark",
  "number": "4.1.11",
  "title": "",
  "body": "Orthogonal systems of functions often arise as eigenfunctions of a self-adjoint differential operator, which is the analogue of real symmetric matrices or Hermitian matrices whose eigenvectors associated to distinct eigenvalues are automatically orthogonal to each other. For example, each function in is an eigenfunction of the following problem: for and , ; each in the family is an eigenfunction of the following problem: for and . In each case, the operator is self-adjoint in the sense that the inner product of with equals the inner product of with (the boundary conditions play an essential role here), and this leads to the orthogonality of eigenfunctions associated to distinct eigenvalues.  "
},
{
  "id": "sec-orthogonal-25",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-25",
  "type": "Definition",
  "number": "4.1.12",
  "title": "Orthonormal Vectors.",
  "body": "Orthonormal Vectors   A set of vectors (finite or infinite) in an inner product space is called an orthonormal set, if any two distinct vectors in this set are orthogonal to each other and each one is a unit vector.   "
},
{
  "id": "sec-orthogonal-26",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-26",
  "type": "Definition",
  "number": "4.1.13",
  "title": "Fourier Coefficients and Fourier Series.",
  "body": "Fourier Coefficients and Fourier Series   Let be a set of orthonormal vectors in an inner product space . For any vector , define . Then are called the Fourier coefficients of with respect to this set of orthonormal vectors, and the series is called the Fourier series of with respect to this set of orthonormal vectors.   "
},
{
  "id": "sec-orthogonal-27",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-27",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "completion "
},
{
  "id": "sec-orthogonal-28",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-28",
  "type": "Remark",
  "number": "4.1.14",
  "title": "",
  "body": " Sometimes we work with a set of orthogonal vectors which are not necessarily unit vectors. This is the case with on . Here we modify the definition of the Fourier coefficients of by defining and as the partial sums of the Fourier series of on :   When we work with the set of orthogonal functions on , the Fourier coefficients of with respect to this set of orthogonal functions on are defined by   "
},
{
  "id": "sec-orthogonal-29",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-29",
  "type": "Exercise",
  "number": "4.1.15",
  "title": "Find Fourier Coefficients.",
  "body": "Find Fourier Coefficients  Find the Fourier coefficients of the functions and with respect to the set of orthogonal functions on .   "
},
{
  "id": "sec-orthogonal-30",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-30",
  "type": "Exercise",
  "number": "4.1.16",
  "title": "Integral Representation of Fourier Partial Sums.",
  "body": " Integral Representation of Fourier Partial Sums  Let denote the partial sums of the Fourier series of with respect to the set of orthogonal functions on , and let denote the Fourier coefficients of with respect to the set of orthogonal functions . Verify that where     First need to work out , then establish using either the relation or .   "
},
{
  "id": "sec-orthogonal-31",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-31",
  "type": "Theorem",
  "number": "4.1.17",
  "title": "Best Approximation Property of Fourier Series.",
  "body": "Best Approximation Property of Fourier Series  Let be a finite set of orthonormal vectors in an inner product space . For any vector , let be the Fourier series of with respect to this set of orthonormal vectors. Then and is orthogonal to every vector in the span of this set of orthonormal vectors. Furthermore, and namely, is closest to among all vectors in the span of this set of orthonormal vectors.    The first assertion follows directly from using the orthonormal condition .  The second assertion follows by using the orthogonality relations above using for any   Set . Then , so with equality iff for all .   "
},
{
  "id": "sec-orthogonal-32",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-32",
  "type": "Definition",
  "number": "4.1.18",
  "title": "Orthogonal Projection.",
  "body": "Orthogonal Projection   Let be a finite set of orthonormal vectors in an inner product space . For any vector , let be the Fourier series of with respect to this set of orthonormal vectors. Then is also called the orthogonal projection of in the span of this set of orthonormal vectors.   "
},
{
  "id": "sec-orthogonal-33",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-33",
  "type": "Exercise",
  "number": "4.1.19",
  "title": "Find Orthogonal Projections.",
  "body": " Find Orthogonal Projections  Find the orthogonal projections of the functions and in the span of the set of orthogonal functions on .   "
},
{
  "id": "sec-orthogonal-34",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-34",
  "type": "Exercise",
  "number": "4.1.20",
  "title": "",
  "body": "Find the orthogonal projection of the function in the span of the set of orthogonal functions on .   "
},
{
  "id": "sec-orthogonal-35",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-35",
  "type": "Theorem",
  "number": "4.1.21",
  "title": "Bessel’s Inequality.",
  "body": "Bessel's Inequality  Let be a set of orthonormal vectors in an inner product space . For any vector , let be the Fourier series of with respect to this set of orthonormal vectors. Then     Take any finite subset . Then we have already proved that Since this holds for any finite , Bessel's inequality follows immediately.   "
},
{
  "id": "sec-orthogonal-36",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-36",
  "type": "Corollary",
  "number": "4.1.22",
  "title": "Bessel’s inequality for trigonometric Fourier series.",
  "body": " Bessel's inequality for trigonometric Fourier series  Let be the Fourier series of with respect to the set of orthogonal functions on . Then As a consequence the following Bessel's inequality holds    "
},
{
  "id": "sec-orthogonal-37",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-37",
  "type": "Remark",
  "number": "4.1.23",
  "title": "",
  "body": "So far we have not addressed the issue whether converges to in the mean square sense, namely whether as . From the above we see that the answer depends on whether equality holds in the Bessel's inequality. Another possible approach is to show that there exists a sequence such that as and appeal to the Best Approximation Property of the Fourier series. This would be the case if the set of finite linear combination of functions from is dense in the mean square norm in the set of function spaces, such as or , in which we are interested in making such a Fourier series expansion.  Given any in or , using the orthogonality relations we have for . The Bessel's inequality implies then that the sequence is a Cauchy sequence in the mean square norm. At this point we need the property of completeness of the function space on which we are working. Unfortunately, neither nor is complete with respect to the mean square norm. The completion of either or turns out to the space of Lebesgue square integrable functions . So a more proper discussion on the issue of mean square convergence should be on the complete space .  Without discussing details of Lebesgue integrable functions, we may assume that there exists some such that as . We claim the following property: This follows by noting that for any , so while by the Cauchy-Schwarz inequality as , which shows that   So a key to our question is whether the only function which is orthogonal to all is the function. This discussion makes sense on a general inner product space.  "
},
{
  "id": "sec-orthogonal-38",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-38",
  "type": "Definition",
  "number": "4.1.24",
  "title": "A Complete (or Maximal) Orthonormal Set.",
  "body": "A Complete (or Maximal) Orthonormal Set   A set of orthonormal vectors in an inner product space is called complete (or maximal) if the only vector orthogonal to each of these vectors is the zero vector.   "
},
{
  "id": "sec-FSConv",
  "level": "1",
  "url": "sec-FSConv.html",
  "type": "Section",
  "number": "4.2",
  "title": "Convergence of the Trigonometric Fourier Series",
  "body": " Convergence of the Trigonometric Fourier Series  We now investigate the issue of convergence of the trigonometric Fourier series. To simplify the set up, we will take from now on; the general case can be reduced to this case by a simple change of variables .  In an earlier exercise it is established that where Note that Using this property and extending as a periodic function on we have by a change of variable in . Then where . The following Riemann-Lebesgue Lemma plays an important role.  Riemann-Lebesgue Lemma   For any Riemann integrable function on , the following holds     If we only take as integers, then this follows from the Bessel's inequality. The same argument also shows that as . These properties are sufficient for applications to , as .  For the general case, first note that if , then integration by parts gives as . For the given , take any , we first find some such that . Then  and for all sufficiently large , which concludes our proof.     A Convergence Criterion for the Trigonometric Fourier series  Suppose that is a periodic function on and is such that there exist and such that Then as .    Under our assumption, is Riemann integrable on , so we can apply the Riemann-Lebesgue to draw our conclusion.     Condition implies that is continuous at . Note that if exists, then is satisfied at . In fact, is satisfied at if both the left derivative and the right derivative exist.  If has both a right limit and a left limit at and , we can rewrite as so If satisfies we can make the same argument to show that as .  Note that whether or not is integrable so as to apply depends only on the the local behavior of near , so whether or not converges depends only on the local behavior of near . This is known as the Riemann's localization theorem .   As a consequence of the above theorem, if and has continuous derivative on , we can redefine to be and extend this function to be a periodic function on . Then the resulting function satisfies the assumption of the above theorem at any such that , so as . At , the left limit of the extended function is and the right limit of the extended function is . Thus as . Since the Fourier series expansion here is periodic, the proper interpretation of the expansion is that the series equals the periodic extension of the given function on in the above sense.  In applying Fourier expansions, it is important to have a keen awareness of the system of orthogoal functions we are working with. For example, if we are working with the set of orthogonal functions on , then the Fourier series expansion of a function with respect to this set of orthogonal functions is , where . The proper interpretation of this expansion is that the series equals the odd extension of the given function on in the above sense. In particular, if and or , then the odd extension of is not continuous at or at , so the Fourier series expansion of with respect to the set of orthogonal functions at or at does not converge to or to , but converges to instead. A similar phenomenon occurs if we are working with the set of orthogonal functions on , then the Fourier series expansion of a function with respect to this set of orthogonal functions is , where . The proper interpretation of this expansion is that the series equals the even extension of the given function on in the above sense.  Often, a function is given by some analytic expression, but that expression outside of the relevant interval has no direct bearing on the Fourier series expansion of with respect to a given set of orthogonal functions. The following figures illustrate the above phenomenon of different extensions of a given function on or on and the resulting different Fourier series expansions with respect to the sets of orthogonal functions.   Different Fourier Expansions of    The graph of and its Fourier serires on together with the graphs of their periodic extensions     The graph of and its Fourier cosine and sine serires on together with the graphs of their periodic extensions     The graph of and its Fourier serires on together with the graphs of their periodic extensions       For any , there exist continuous functions such that does not converge, so continuity of at alone may not guarantee that converges as .  However, a modified trigonometric series, the Fejér series, defined as the arithmetic average of 's: does converge to for any which is continuous at .   Fejér Theorem  Suppose that the Riemann integrable function on is continuous at , then as . If is continuous on and is periodic, then uniformly over as . Suppose that has both a right limit and a left limit at , then as .    We note that where           For, then, using (a) above, and for any , we first choose such that for all with , then use this in the above, which will make the first integral above using (b) above. Finally, for sufficiently large , the second integral above will also be less than using (c) above. This proves the first assertion. When is continuous on and is periodic, then above can be chosen independent of , which shows that the convergence is uniform over .  If has both left and right limits at , one could use the evenness of or to rewrite the integral as two separate integrals. For example, and one can use to carry out a similar convergence argument.    Fejér's theorem implies that the span of (equivalently ) is dense in both and in the mean square sense, for, given any and , first find a periodic and continuous function such that . Then find such that by the above theorem. Finally triangle inequality implies that .  As a consequence we have  Mean Square Convergence and Parseval Equality   For any , as . As a consequence, the following Parseval equality holds:     Since the span of is a subspace of when , the Best Approximation Theorem implies that For any , Fejér's theorem gives some trigonometric polynomial of degree such that . Then the Best Approximation Theorem implies that . Then for all , we have . The Parseval equality follows from .       is a set of maximal orthogonal functions in    Suppose not. Let be a non-zero function in orthogonal to each . We may assume that . Then for any trigonometric polynomial of the form , the orthogonality property implies that But we can find a continuous periodic function such that , and a trigonometric polynomial of the form such that . Then the triangle inequality implies that , which contradicts the property established earlier.    "
},
{
  "id": "RLL",
  "level": "2",
  "url": "sec-FSConv.html#RLL",
  "type": "Lemma",
  "number": "4.2.1",
  "title": "Riemann-Lebesgue Lemma.",
  "body": "Riemann-Lebesgue Lemma   For any Riemann integrable function on , the following holds     If we only take as integers, then this follows from the Bessel's inequality. The same argument also shows that as . These properties are sufficient for applications to , as .  For the general case, first note that if , then integration by parts gives as . For the given , take any , we first find some such that . Then  and for all sufficiently large , which concludes our proof.   "
},
{
  "id": "sec-FSConv-5",
  "level": "2",
  "url": "sec-FSConv.html#sec-FSConv-5",
  "type": "Theorem",
  "number": "4.2.2",
  "title": "A Convergence Criterion for the Trigonometric Fourier series.",
  "body": " A Convergence Criterion for the Trigonometric Fourier series  Suppose that is a periodic function on and is such that there exist and such that Then as .    Under our assumption, is Riemann integrable on , so we can apply the Riemann-Lebesgue to draw our conclusion.   "
},
{
  "id": "sec-FSConv-6",
  "level": "2",
  "url": "sec-FSConv.html#sec-FSConv-6",
  "type": "Remark",
  "number": "4.2.3",
  "title": "",
  "body": " Condition implies that is continuous at . Note that if exists, then is satisfied at . In fact, is satisfied at if both the left derivative and the right derivative exist.  If has both a right limit and a left limit at and , we can rewrite as so If satisfies we can make the same argument to show that as .  Note that whether or not is integrable so as to apply depends only on the the local behavior of near , so whether or not converges depends only on the local behavior of near . This is known as the Riemann's localization theorem .  "
},
{
  "id": "fig-FS",
  "level": "2",
  "url": "sec-FSConv.html#fig-FS",
  "type": "Figure",
  "number": "4.2.4",
  "title": "",
  "body": " Different Fourier Expansions of    The graph of and its Fourier serires on together with the graphs of their periodic extensions     The graph of and its Fourier cosine and sine serires on together with the graphs of their periodic extensions     The graph of and its Fourier serires on together with the graphs of their periodic extensions     "
},
{
  "id": "sec-FSConv-11",
  "level": "2",
  "url": "sec-FSConv.html#sec-FSConv-11",
  "type": "Remark",
  "number": "4.2.5",
  "title": "",
  "body": " For any , there exist continuous functions such that does not converge, so continuity of at alone may not guarantee that converges as .  However, a modified trigonometric series, the Fejér series, defined as the arithmetic average of 's: does converge to for any which is continuous at .  "
},
{
  "id": "sec-FSConv-12",
  "level": "2",
  "url": "sec-FSConv.html#sec-FSConv-12",
  "type": "Theorem",
  "number": "4.2.6",
  "title": "Fejér Theorem.",
  "body": "Fejér Theorem  Suppose that the Riemann integrable function on is continuous at , then as . If is continuous on and is periodic, then uniformly over as . Suppose that has both a right limit and a left limit at , then as .    We note that where           For, then, using (a) above, and for any , we first choose such that for all with , then use this in the above, which will make the first integral above using (b) above. Finally, for sufficiently large , the second integral above will also be less than using (c) above. This proves the first assertion. When is continuous on and is periodic, then above can be chosen independent of , which shows that the convergence is uniform over .  If has both left and right limits at , one could use the evenness of or to rewrite the integral as two separate integrals. For example, and one can use to carry out a similar convergence argument.   "
},
{
  "id": "sec-FSConv-15",
  "level": "2",
  "url": "sec-FSConv.html#sec-FSConv-15",
  "type": "Theorem",
  "number": "4.2.7",
  "title": "Mean Square Convergence and Parseval Equality.",
  "body": "Mean Square Convergence and Parseval Equality   For any , as . As a consequence, the following Parseval equality holds:     Since the span of is a subspace of when , the Best Approximation Theorem implies that For any , Fejér's theorem gives some trigonometric polynomial of degree such that . Then the Best Approximation Theorem implies that . Then for all , we have . The Parseval equality follows from .   "
},
{
  "id": "sec-FSConv-16",
  "level": "2",
  "url": "sec-FSConv.html#sec-FSConv-16",
  "type": "Theorem",
  "number": "4.2.8",
  "title": "",
  "body": "   is a set of maximal orthogonal functions in    Suppose not. Let be a non-zero function in orthogonal to each . We may assume that . Then for any trigonometric polynomial of the form , the orthogonality property implies that But we can find a continuous periodic function such that , and a trigonometric polynomial of the form such that . Then the triangle inequality implies that , which contradicts the property established earlier.   "
},
{
  "id": "int-diff",
  "level": "1",
  "url": "int-diff.html",
  "type": "Section",
  "number": "4.3",
  "title": "Term-wise Integration and Differentiation of Fourier Series",
  "body": "Term-wise Integration and Differentiation of Fourier Series  Suppose that is the Fourier series of . We address whether we can integrate this relation term-wise and, when exists and is in , whether we can differentiate this relation term-wise.  Term-wise Integration of Fourier Series   Suppose that is the Fourier series of . Then for any ,    The assertion is equivalent to But and using , we conclude .    Recall that a function is called piecewise continuous on if there is a finite partition of such that its restriction on any is continuous and has a continuous extension to . This implies that the function is continuous at every point of with possibly the exception at the 's and that it has both left and right limits at each of these 's.   Term-wise Differentiation of Fourier Series   Suppose that is continuous on , and , and that exists except at a finite number of points and is piecewise continuous. Denote the Fourier series expansion of on by Then In other words, under our assumptions here , the Fourier series expansion of on can be obtained by term-wise differentiation of the Fourier series expansion of on .    Note that, for , and for , integration by parts gives      Note that the continuity and periodicity of can't be dropped, as can be seen by the Fourier expansion of on .    Relation Between the Fourier Series of a Function and its Derivative  Compute the Fourier series of and on , then study the relation between the two series.    The orthogonal family of functions on happens to be the restriction to of the odd functions . For any continuous (or Riemann integrable) on , let be the odd extension of to . Then the Fourier series of on would only consist of the terms, and would converge to in the mean square on . In particular, the restriction of the Fourier series would converge to in the mean square on .  Note that if denotes the Fourier coefficient of with respect to on , then The series is typically called the Fourier sine series of on .  Likewise, the family of functions on is orthogonal on and happens to be the restriction to of the even functions . For any continuous (or Riemann integrable) on , let be the even extension of to . Then the Fourier series of on would only consist of the terms, and would converge to in the mean square on . In particular, the restriction of the Fourier series would converge to in the mean square on . This series is called the Fourier cosine series of on . Note that for  while     Fourier Sine Series  Compute the Fourier sine series of on , then study the sense in which this Fourier sine series approximates .    Fourier Cosine Series  Compute the Fourier cosine series of on , then study the sense in which this Fourier cosine series approximates .    Suppose that is continuous on , , and that exists except at a finite number of points and is piecewise continuous. Suppose that is the Fourier series of on . Prove that    Wirtinger's inequality  Suppose that is continuous on , , and that exists except at a finite number of points and is piecewise continuous. Prove that with equality iff for some constants . Here is the average of over .   Another Wirtinger's inequality   Suppose that is continuous on and that exists except at a finite number of points and is piecewise continuous. Prove that with equality iff for some constants . Here is the average of over .    is a complete system of orthogonal functions on and so is . Expand in the former and in the latter.    Prove that a sequence of functions converges in iff the sequence of their Fourier coefficients converges in .   Let be a finite number. Consider the set of continuous on such that exists except at a finite number of points and is piecewise continuous and . Prove that the closure of in is compact.  Use and to prove that any sequence in has a subsequence converging in .    "
},
{
  "id": "int-diff-3",
  "level": "2",
  "url": "int-diff.html#int-diff-3",
  "type": "Theorem",
  "number": "4.3.1",
  "title": "Term-wise Integration  of Fourier Series.",
  "body": "Term-wise Integration of Fourier Series   Suppose that is the Fourier series of . Then for any ,    The assertion is equivalent to But and using , we conclude .   "
},
{
  "id": "termwisediff",
  "level": "2",
  "url": "int-diff.html#termwisediff",
  "type": "Theorem",
  "number": "4.3.2",
  "title": "Term-wise Differentiation of Fourier Series.",
  "body": " Term-wise Differentiation of Fourier Series   Suppose that is continuous on , and , and that exists except at a finite number of points and is piecewise continuous. Denote the Fourier series expansion of on by Then In other words, under our assumptions here , the Fourier series expansion of on can be obtained by term-wise differentiation of the Fourier series expansion of on .    Note that, for , and for , integration by parts gives    "
},
{
  "id": "int-diff-6",
  "level": "2",
  "url": "int-diff.html#int-diff-6",
  "type": "Remark",
  "number": "4.3.3",
  "title": "",
  "body": " Note that the continuity and periodicity of can't be dropped, as can be seen by the Fourier expansion of on .  "
},
{
  "id": "int-diff-7",
  "level": "2",
  "url": "int-diff.html#int-diff-7",
  "type": "Exercise",
  "number": "4.3.4",
  "title": "Relation Between the Fourier Series of a Function and its Derivative.",
  "body": " Relation Between the Fourier Series of a Function and its Derivative  Compute the Fourier series of and on , then study the relation between the two series.  "
},
{
  "id": "int-diff-8",
  "level": "2",
  "url": "int-diff.html#int-diff-8",
  "type": "Remark",
  "number": "4.3.5",
  "title": "",
  "body": " The orthogonal family of functions on happens to be the restriction to of the odd functions . For any continuous (or Riemann integrable) on , let be the odd extension of to . Then the Fourier series of on would only consist of the terms, and would converge to in the mean square on . In particular, the restriction of the Fourier series would converge to in the mean square on .  Note that if denotes the Fourier coefficient of with respect to on , then The series is typically called the Fourier sine series of on .  Likewise, the family of functions on is orthogonal on and happens to be the restriction to of the even functions . For any continuous (or Riemann integrable) on , let be the even extension of to . Then the Fourier series of on would only consist of the terms, and would converge to in the mean square on . In particular, the restriction of the Fourier series would converge to in the mean square on . This series is called the Fourier cosine series of on . Note that for  while   "
},
{
  "id": "int-diff-9",
  "level": "2",
  "url": "int-diff.html#int-diff-9",
  "type": "Exercise",
  "number": "4.3.6",
  "title": "Fourier Sine Series.",
  "body": " Fourier Sine Series  Compute the Fourier sine series of on , then study the sense in which this Fourier sine series approximates .  "
},
{
  "id": "int-diff-10",
  "level": "2",
  "url": "int-diff.html#int-diff-10",
  "type": "Exercise",
  "number": "4.3.7",
  "title": "Fourier Cosine Series.",
  "body": " Fourier Cosine Series  Compute the Fourier cosine series of on , then study the sense in which this Fourier cosine series approximates .  "
},
{
  "id": "ex-wirtinger-pre",
  "level": "2",
  "url": "int-diff.html#ex-wirtinger-pre",
  "type": "Exercise",
  "number": "4.3.8",
  "title": "",
  "body": " Suppose that is continuous on , , and that exists except at a finite number of points and is piecewise continuous. Suppose that is the Fourier series of on . Prove that   "
},
{
  "id": "ex-wirtinger",
  "level": "2",
  "url": "int-diff.html#ex-wirtinger",
  "type": "Exercise",
  "number": "4.3.9",
  "title": "Wirtinger’s inequality.",
  "body": "Wirtinger's inequality  Suppose that is continuous on , , and that exists except at a finite number of points and is piecewise continuous. Prove that with equality iff for some constants . Here is the average of over .  "
},
{
  "id": "ex-wirtinger2",
  "level": "2",
  "url": "int-diff.html#ex-wirtinger2",
  "type": "Exercise",
  "number": "4.3.10",
  "title": "Another Wirtinger’s inequality.",
  "body": "Another Wirtinger's inequality   Suppose that is continuous on and that exists except at a finite number of points and is piecewise continuous. Prove that with equality iff for some constants . Here is the average of over .    is a complete system of orthogonal functions on and so is . Expand in the former and in the latter.   "
},
{
  "id": "int-diff-14",
  "level": "2",
  "url": "int-diff.html#int-diff-14",
  "type": "Exercise",
  "number": "4.3.11",
  "title": "",
  "body": "Prove that a sequence of functions converges in iff the sequence of their Fourier coefficients converges in .  "
},
{
  "id": "int-diff-15",
  "level": "2",
  "url": "int-diff.html#int-diff-15",
  "type": "Exercise",
  "number": "4.3.12",
  "title": "",
  "body": "Let be a finite number. Consider the set of continuous on such that exists except at a finite number of points and is piecewise continuous and . Prove that the closure of in is compact.  Use and to prove that any sequence in has a subsequence converging in .   "
},
{
  "id": "sec-continuity",
  "level": "1",
  "url": "sec-continuity.html",
  "type": "Section",
  "number": "5.1",
  "title": "Continuity of a Function of Several Variables",
  "body": "Continuity of a Function of Several Variables  The concept of continuity of a map from a metric space to a metric space applies directly to a function of several variables---one needs to distinguish between continuity at a point, everywhere continuity, and uniform continuity. For two general metric space and , there is often not much structure of the space of maps from to that are continuous everywhere (or continuous at a point) on ; for example, if are two such maps, there is usually no natural operation of or . One natural operation for this general setting is composition : suppose and , then is defined and when is continuous at and is continuous at , then is continuous at .  However, when for some , then makes a natural sense; in fact, for any scalar , is well defined and continuous on . This makes a vector space.  We will just summarize a few most useful properties for this latter setting.  Let be a subset of , be a map defined on and . Recall that is continuous at , if for any , there exists some such that for any with , we have .  If we write out , it's clear that is continuous at iff each , for , is continuous at .  The above property does not necessarily hold when the image space is infinitely dimensional. For example, if the space of sequences that are square summable. Suppose that and each , for , is continuous at . Does this imply that is continuous at ?  Let be continuous such that for all and for all . Then defines a continuous function on for each , and for each , for, given any , for all such that , so terminates after a finite number of terms. However, for , no matter how large is. This shows that this is not continuous at .    Some examples of continuous functions  The functions defining the change of coordinate from polar coordinates to rectangular coordinates are continuous for : Part of the inverse, , is defined on and continuous there, but as a function of is only defined on --- one often uses the formula , but it works only for .    The inner product function: is continuous on .  Suppose and are two continuous functions from to , then composition with the continuous inner product makes a continuous function from to .    Let be any normed vector space, then is continuous from to . This follows from using the triangle inequality to get       Define for any , then is continuous in . We check that so as , proving the continuity of .    "
},
{
  "id": "sec-continuity-7",
  "level": "2",
  "url": "sec-continuity.html#sec-continuity-7",
  "type": "Remark",
  "number": "5.1.1",
  "title": "",
  "body": "The above property does not necessarily hold when the image space is infinitely dimensional. For example, if the space of sequences that are square summable. Suppose that and each , for , is continuous at . Does this imply that is continuous at ?  Let be continuous such that for all and for all . Then defines a continuous function on for each , and for each , for, given any , for all such that , so terminates after a finite number of terms. However, for , no matter how large is. This shows that this is not continuous at .  "
},
{
  "id": "sec-continuity-8",
  "level": "2",
  "url": "sec-continuity.html#sec-continuity-8",
  "type": "Example",
  "number": "5.1.2",
  "title": "Some examples of continuous functions.",
  "body": " Some examples of continuous functions  The functions defining the change of coordinate from polar coordinates to rectangular coordinates are continuous for : Part of the inverse, , is defined on and continuous there, but as a function of is only defined on --- one often uses the formula , but it works only for .    The inner product function: is continuous on .  Suppose and are two continuous functions from to , then composition with the continuous inner product makes a continuous function from to .    Let be any normed vector space, then is continuous from to . This follows from using the triangle inequality to get       Define for any , then is continuous in . We check that so as , proving the continuity of .   "
},
{
  "id": "section-linearmaps",
  "level": "1",
  "url": "section-linearmaps.html",
  "type": "Section",
  "number": "5.2",
  "title": "Linear Functions",
  "body": " Linear Functions   Before we discuss linear approximation of a function from a normed vector space to a normed vector space, we first review linear functions defined from a normed vector space to a normed vector space. Even though much of the discussion makes sense in this general setting, we will mostly focus on the cases when the vector spaces are finite dimensional, in particular, when they are the usual Cartesian vector spaces. In such situations, much of this discussion is a review of some relevant concepts and properties from linear algebra. Perhaps the only new concept is the norm of a linear function (also called a linear map or a linear transformation).    Definition of Linear Functions and Their Matrix Representation   linear map  Let be two vector spaces over . A function is called linear if A linear function is also called a linear map or a linear transformation .  A function is called affine if there is a linear function and a vector such that .    Note that , so an equivalent condition for to be affine is that is linear. We often use a certain affine function to approximate another function and in such a context we call it a linear approximation.  The most useful relation is that for any linear map between two finite dimensional vectors spaces and , once a basis of and a basis of are chosen, can be represented through a matrix multiplication as follows: There exist coefficients such that for each ,  thus where . In other words, the action of in terms of the coordinates with respect to the two bases is represented through matrix multiplication by .  Both and can be represented more cleanly using matrix notation: with we have where   There is a natural addition of two linear maps and from a vector space to a vector space , and a scalar multiplication of a linear map. This makes the set of linear maps from to a vector space. Furthermore, when and are finite dimensional, after a basis of and a basis of are chosen, if is represented by matrix , and is represented by matrix , then is represented by matrix .  Suppose is a linear map from to , and is a linear map from to , then the natural composition map is also a linear map. When , and are all finite dimensional, and a basis has been chosen in each vector space, with representing and representing , then the matrix representation for is the matrix product . In fact, the matrix multiplication is defined precisely based on this natural property. We often omit the composition operator between and and write as .  Invertible Linear Map   If is a linear map, and there exists a linear map such that and , namely, for all and for all , we say that is an invertible linear map.  When such an exists, it is uniquely determined. It is called the inverse of and denoted as .    Composition of Linear Maps  Define and .  Determine .  Find the matrix representation for , , and respectively in the respective standard bases.  Are or invertible? Are they injective or surjective?      Matrix Representation of the Derivative Operator  Let denote the span of and define be the derivative operator.  Find the matrix representation of and in the given basis.  Does map the span of to itself? If so, determine whether this map is invertible.        Operator Norm of a Linear Map  Operator Norm of a Linear Map   If and are normed vector spaces, and is a linear map, then the operator norm, also called Frobenius norm, of is defined as Equivalently, Sometimes we use the notation .    It follows that and is the smallest number such that   In applications we often work normed vector spaces and linear maps with a finite operator norm, and when a linear map with a finite operator norm is invertible, we are interested in knowing whether its inverse also has a finite operator norm.   depends on the specific norms used on . For example, is a linear map from to , where both and are endowed with the norm: . Then clearly .   here is invertible, with for any . However, does not have a finite operator norm with respect to the norms we have chosen here, for, that would require the existence of some such that But is a family in , with , yet , so the above inequality can't hold when .  If we endow with the norm: , then still has a finite norm: for all , and its inverse also has a finite norm:     As seen from the example above, when is not finite dimensional it is possible that a linear map from to may not have a finite norm. However, when is finite dimensional, we will prove the following proposition.     Suppose that is a finite dimensional normed vector space, then for any normed vector space and a linear map from to , its operator norm is finite.    Let be a basis of . Then any has coordinates in this basis: , and At the end of this subsection, we will prove a Lemma which implies that there exists some constant such that This shows that is finite and .    Unless indicated otherwise, we will restrict to the situation that is a finite dimensional normed vector space.  Suppose and are linear maps from to . Using the property of the operator norm, we see that for any vector , so it follows that It is easier to see that for any scalar . Thus the set of linear maps from to becomes a normed vector space.  Suppose is a linear map from to , and is a linear map from to , using the property of the operator norm, we see that thus .   The operator norm depends on the norms on and . When and are Cartesian vector spaces such as , the most commonly used norm is the Euclidean norm But other norms may also be used, such as or   It is usually not easy to get the precise value of the operator norm. Often one tries to give an estimate for this norm. When a linear map is represented by a matrix , it would make sense to estimate in terms of the matrix ; but one needs to be aware that has different matrix representations depending on the choice of bases used, and any estimate of in terms of the matrix has to take into account of this freedom.  When and are equipped with the standard Euclidean norm, and their standard bases are used, recall that it follows that so in this setting is identified as the square root of the largest eigenvalue of .  Using the Cauchy-Schwarz inequality, one can easily get an estimate of the form The latter is actually the square mean norm on the space of matrices denoted as .  When and is an orthogonal matrix, this estimate would give as for each , while the above characterization, or the defining property of an orthogonal map gives .   Dependence of operator norm on vector space norm   is a linear function on .    Determine the operator norm of if is equipped with the norm .   Determine the operator norm of if is equipped with the norm .    Determine the operator norm of if is equipped with the norm for some .       When a linear map from to has a finite norm, it is a continuous map, as In fact, the converse is also true. For, if is linear and continuous at , then for any , there exists such that whenever . But for any , , we thus have from which we conclude that    When and are finite dimensional, most questions about a linear map from to can be formulated as a question about its matrix representation and answered that way. For example, if and have the same dimension, then a a linear map from to is injective iff the null space of its matrix representation is trivial, from which one also knows that is injective iff it is surjective.  However, when and are not finite dimensional, we lose this matrix representation, and many of the conclusions or deductions in the finite dimensional setting do not work any more. For example, if , and and are the left and right shift operator respectively, then is surjective but not injective, while is injective but not surjective.  In the context of Fourier series, we may consider as a linear map from either or to , where is the vector of Fourier coefficients of . Then the uniqueness of the Fourier series (which is equivalent to the completeness of the sequence of standard trigonometric functions) implies that this transformation is injective. The Bessel's inequality implies that, as a linear map from to , it has a bounded norm, as and   But if we consider this linear map as from to , it does not have a bounded norm if we equip function with the norm , as for any , there exists , such that   A natural question in this context is whether is surjective considered either as a map from or to . The answer to this question turns out to be negative, and it is related to whether or is a complete normed space equipped with the norm , as the latter is also a well defined norm on either or .  The th Fourier series partial sum of is a linear map from to itself. Using the integral expression for , it is easy to see that its operator norm is , which tends to as .  Fix any , one may consider as a linear map from to the normed vector space , and the norm of this transformation is also . This fact plays a role in implying that at any designated point there are continuous functions whose Fourier series diverges there.     Any Two Norms on a Finite Dimensional Vector Space Are Equivalent    Let be any finite dimensional vector space over , and let be a basis. For any , let be the coordinates of in this basis: Then there exits constants such that     The general statement of the Lemma follows from the inequality above, as is a concrete norm on , and any two norms satisfy a similar inequality via their relations with this norm.  The first inequality follows from triangle inequality. For the second inequality, if it does not hold, then using homogeneity of norms, there would exist a sequence such that The sequence is a sequence in with unit Euclidean norm. By the Bolzano-Weierstrass Theorem, it has a convergent subsequence. Still call it to simply notation, and let be such that as . Then . Thus .  But by the first inequality, which is already established, Now using it follows that , which contradicts the property of a norm. This concludes our proof of the Lemma.     "
},
{
  "id": "linearmap",
  "level": "2",
  "url": "section-linearmaps.html#linearmap",
  "type": "Definition",
  "number": "5.2.1",
  "title": "",
  "body": " linear map  Let be two vector spaces over . A function is called linear if A linear function is also called a linear map or a linear transformation .  A function is called affine if there is a linear function and a vector such that .   "
},
{
  "id": "subsec-linearmap-8",
  "level": "2",
  "url": "section-linearmaps.html#subsec-linearmap-8",
  "type": "Definition",
  "number": "5.2.2",
  "title": "Invertible Linear Map.",
  "body": "Invertible Linear Map   If is a linear map, and there exists a linear map such that and , namely, for all and for all , we say that is an invertible linear map.  When such an exists, it is uniquely determined. It is called the inverse of and denoted as .   "
},
{
  "id": "subsec-linearmap-9",
  "level": "2",
  "url": "section-linearmaps.html#subsec-linearmap-9",
  "type": "Exercise",
  "number": "5.2.3",
  "title": "Composition of Linear Maps.",
  "body": "Composition of Linear Maps  Define and .  Determine .  Find the matrix representation for , , and respectively in the respective standard bases.  Are or invertible? Are they injective or surjective?     "
},
{
  "id": "subsec-linearmap-10",
  "level": "2",
  "url": "section-linearmaps.html#subsec-linearmap-10",
  "type": "Exercise",
  "number": "5.2.4",
  "title": "Matrix Representation of the Derivative Operator.",
  "body": "Matrix Representation of the Derivative Operator  Let denote the span of and define be the derivative operator.  Find the matrix representation of and in the given basis.  Does map the span of to itself? If so, determine whether this map is invertible.     "
},
{
  "id": "subsec-OperNorm-2",
  "level": "2",
  "url": "section-linearmaps.html#subsec-OperNorm-2",
  "type": "Definition",
  "number": "5.2.5",
  "title": "Operator Norm of a Linear Map.",
  "body": "Operator Norm of a Linear Map   If and are normed vector spaces, and is a linear map, then the operator norm, also called Frobenius norm, of is defined as Equivalently, Sometimes we use the notation .   "
},
{
  "id": "subsec-OperNorm-5",
  "level": "2",
  "url": "section-linearmaps.html#subsec-OperNorm-5",
  "type": "Remark",
  "number": "5.2.6",
  "title": "",
  "body": " depends on the specific norms used on . For example, is a linear map from to , where both and are endowed with the norm: . Then clearly .   here is invertible, with for any . However, does not have a finite operator norm with respect to the norms we have chosen here, for, that would require the existence of some such that But is a family in , with , yet , so the above inequality can't hold when .  If we endow with the norm: , then still has a finite norm: for all , and its inverse also has a finite norm:   "
},
{
  "id": "subsec-OperNorm-6",
  "level": "2",
  "url": "section-linearmaps.html#subsec-OperNorm-6",
  "type": "Remark",
  "number": "5.2.7",
  "title": "",
  "body": " As seen from the example above, when is not finite dimensional it is possible that a linear map from to may not have a finite norm. However, when is finite dimensional, we will prove the following proposition.  "
},
{
  "id": "finite-norm",
  "level": "2",
  "url": "section-linearmaps.html#finite-norm",
  "type": "Proposition",
  "number": "5.2.8",
  "title": "",
  "body": "  Suppose that is a finite dimensional normed vector space, then for any normed vector space and a linear map from to , its operator norm is finite.    Let be a basis of . Then any has coordinates in this basis: , and At the end of this subsection, we will prove a Lemma which implies that there exists some constant such that This shows that is finite and .   "
},
{
  "id": "subsec-OperNorm-11",
  "level": "2",
  "url": "section-linearmaps.html#subsec-OperNorm-11",
  "type": "Remark",
  "number": "5.2.9",
  "title": "",
  "body": " The operator norm depends on the norms on and . When and are Cartesian vector spaces such as , the most commonly used norm is the Euclidean norm But other norms may also be used, such as or   It is usually not easy to get the precise value of the operator norm. Often one tries to give an estimate for this norm. When a linear map is represented by a matrix , it would make sense to estimate in terms of the matrix ; but one needs to be aware that has different matrix representations depending on the choice of bases used, and any estimate of in terms of the matrix has to take into account of this freedom.  When and are equipped with the standard Euclidean norm, and their standard bases are used, recall that it follows that so in this setting is identified as the square root of the largest eigenvalue of .  Using the Cauchy-Schwarz inequality, one can easily get an estimate of the form The latter is actually the square mean norm on the space of matrices denoted as .  When and is an orthogonal matrix, this estimate would give as for each , while the above characterization, or the defining property of an orthogonal map gives .  "
},
{
  "id": "subsec-OperNorm-12",
  "level": "2",
  "url": "section-linearmaps.html#subsec-OperNorm-12",
  "type": "Exercise",
  "number": "5.2.10",
  "title": "Dependence of operator norm on vector space norm.",
  "body": "Dependence of operator norm on vector space norm   is a linear function on .    Determine the operator norm of if is equipped with the norm .   Determine the operator norm of if is equipped with the norm .    Determine the operator norm of if is equipped with the norm for some .     "
},
{
  "id": "subsec-OperNorm-13",
  "level": "2",
  "url": "section-linearmaps.html#subsec-OperNorm-13",
  "type": "Remark",
  "number": "5.2.11",
  "title": "",
  "body": " When a linear map from to has a finite norm, it is a continuous map, as In fact, the converse is also true. For, if is linear and continuous at , then for any , there exists such that whenever . But for any , , we thus have from which we conclude that   "
},
{
  "id": "subsec-OperNorm-19",
  "level": "2",
  "url": "section-linearmaps.html#subsec-OperNorm-19",
  "type": "Remark",
  "number": "5.2.12",
  "title": "",
  "body": "The th Fourier series partial sum of is a linear map from to itself. Using the integral expression for , it is easy to see that its operator norm is , which tends to as .  Fix any , one may consider as a linear map from to the normed vector space , and the norm of this transformation is also . This fact plays a role in implying that at any designated point there are continuous functions whose Fourier series diverges there.  "
},
{
  "id": "lem-norms",
  "level": "2",
  "url": "section-linearmaps.html#lem-norms",
  "type": "Lemma",
  "number": "5.2.13",
  "title": "",
  "body": "  Let be any finite dimensional vector space over , and let be a basis. For any , let be the coordinates of in this basis: Then there exits constants such that     The general statement of the Lemma follows from the inequality above, as is a concrete norm on , and any two norms satisfy a similar inequality via their relations with this norm.  The first inequality follows from triangle inequality. For the second inequality, if it does not hold, then using homogeneity of norms, there would exist a sequence such that The sequence is a sequence in with unit Euclidean norm. By the Bolzano-Weierstrass Theorem, it has a convergent subsequence. Still call it to simply notation, and let be such that as . Then . Thus .  But by the first inequality, which is already established, Now using it follows that , which contradicts the property of a norm. This concludes our proof of the Lemma.   "
},
{
  "id": "ch-differentiaion-6",
  "level": "1",
  "url": "ch-differentiaion-6.html",
  "type": "Section",
  "number": "5.3",
  "title": "Differentiation",
  "body": "Differentiation  Differentiability of a function of several variables is defined in terms of a linear approximation. The notion of directional derivative and partial derivative arise when the differentiability of a function of several variables is studied along a one-dimensional line.   Differentiability, Directional Derivative, and Partial Derivative  Differentiability and Jacobian Matrix   Suppose that and are normed vector spaces, that and is an interior point of . is said to be differentiable at if there exists a linear map with finite operator norm such that In other words, for any , there exists some such that   When and is differentiable at , the linear map can be represented as a matrix multiplication on in the usual rectangular coordinates. We will denote this matrix also by and call it the Jacobian matrix (also called Jacobian derivative or total derivative) of at and also denote it as .    The key here is that  The linear approximation part, , depends on in a linear fashion with a finite operator norm: for all .  The works for all with regardless its direction.  If we set , it is the remainder term when is approximated by , and is equivalent to   One should check that when is differentiable, then only one linear map can satisfy the condition in the definition.  Directional Derivative   Suppose , is an interior point of , is any non-zero vector. is said to have directional derivative at in the direction , if the one variable function is differentiable at . In such a case the derivative of this one variable function at is called the directional derivative at in the direction , and is denoted as .    Note that the existence of the directional derivative of at in the direction of is defined as for some vector . This can also be formulated as or equivalently, for any , there exists some such that But in this formulation there is no condition on how may depend on and the here may also depend on .   The definition of differentiability involves the norm on and . But due to , when is finite dimensional, it does not matter what norm to use on . Similarly, when is finite dimensional, it does not matter what norm to use on .   From now on we will restrict to the case of maps between finite dimensional vector spaces, and usually take . When exists with equal to the the standard unit vector along the coordinate, we say that has partial derivative at in the variable, and denote this partial derivative as . Thus . Another commonly used notation for is , or , or the subscript notation .  When is differentiable at , then if we take any non-zero vector and , we get This means that the directional derivative of at in the direction exists, and . In particular, if we take , the standard unit vector along the coordinate, we get the partial derivative of at  , which is the th column of .   Suppose that is differentiable at , with denoting its Jacobian matrix at , then it is continuous at . Furthermore, it has directional derivative in any direction at and the directional derivative of at in the direction equals . As a consequence, the entry of is , where .    The only part that we have not provided detail is to prove the continuity of at . For any , there exists some such that Then Using we can certainly adjust to make sure that when , we have , which would guarantee that , proving the continuity of at .    Question  Here are a few basic questions related to the concept of a function differentiable at a point and having partial derivatives or directional derivatives there.    Suppose a function has partial derivatives at a point in all its coordinate directions. Does it imply that the function has directional derivatives at that point in any direction? Does it imply that the function is differentiable at that point? Does it imply that the function is continuous there?  Suppose a function has directional derivatives at a point in any direction. Does it imply that the function is differentiable at that point? Does it imply that the function is continuous at that point?       We discuss below two examples showing that the answers to all the above questions are negative.    A function may have partial derivative at some in each direction, yet can fail to be continuous there, and does not have directional derivative in any direction except for the coordinate directions.    Here is a simple example for . Its restriction to either the or coordinate is identically zero, so its partial derivatives . Yet for any direction , which is not continuous at , unless . Thus is not continuous at and does not exist unless points along either the or coordinate axis.      A function may have directional derivative at some in each direction, yet can still fail to be differentiable there.    Here is a simple example for . For any direction , , so But it does not depend on in a linear fashion, so is not differentiable at .  A formal way of proving that this is not differentiable at is to argue by contradiction. If it were differentiable at , then the linear approximation must be given by . But it is easy to see by definition that . Thus we would have as . But that is not the case, as when , this quotient is , which does not tend to as .      A function may have directional derivative at some in each direction, yet can even fail to be continuous there. Here is a simple example   For any direction , has its derivative equal at . However, as , if we choose to satisfy , we would get , which is not .    A function may be differentiable at a point but may not have partial derivatives at nearby points. near is such an example.   In addition to the possible difference of behavior as illustrated above when the domain is more than one dimension, there may also be some differences when the function is vector-valued. If is a real-valued function, differentiable on and continuous on , then the mean value theorem implies that for some between and . Does this property hold for vector-valued (e.g. complex-valued) functions under similar assumptions?   Mean Value Theorem   Examine whether the mean value theorem holds for for .     Suppose that is a vector-valued function, differentiable on and continuous on , and that there exists some such that for all . Then .   If we assume, in addition, that is continuous on , then we have an easy proof using .  For the general case, it suffices to prove that for any , Fix any , if does not hold for some , let be the infimum of the values for which fails. First we show that . This follows from the continuity of at , as it shows that for some  holds for . By definition of , holds for any . By continuity of at  continues to hold at . Thus under our assumption. Then using , there exists some such that for , it then follows that, for , showing that continues to hold for , contradicting the definition of .    For a function of several variables, in general it does not make sense to define differentiability in terms of the limit of the difference quotient as there is no meaningful quotient operation between vectors in a general context. There are some exceptions. When , there is a well defined multiplication and quotient between vectors in when we represent them as complex numbers. When a complex valued function satisfies it is said to have a complex derivative .  This is a stronger condition than the differentiability in the linear approximation sense over vectors in as introduced above, as that would give a function which is linear in over the reals, while this condition of having a complex derivative would imply and as a result so   In terms of vector operations in , corresponds to , where represents rotation with respect to the origin in of angle . If is merely differentiable in the linear approximation sense, then In fact, a complex valued function has a complex derivative at some if it is differentiable in the linear approximation sense, and the linear approximation further satisfies    It is easy to see that if is differentiable at in the linear approximation sense, then the linear approximation part is uniquely determined. It will be denoted as . It is easier to interpret this in the matrix-vector multiplication sense, with the entry in position of given by the partial derivative .  Matrix Commuting with Rotation Matrix   Let . Verify that satisfies iff there exist some real such that . In fact, the same conclusion holds if we only require for some .    The most important properties regarding differentiability are the chain rule and differentiability of functions with continuous partial derivatives.    Chain Rule   chain rule   Suppose that is differentiable at , with , and is differentiable at , then is differentiable at , with its Jacobian derivative given by the matrix product .  In component notation, this is or If we write and , then the above can be written as     Commutative diagrams for the Chain Rule    Function Maps       Jacobian Derivatives        Note that we use a parenthesis as a delimiter to delineate the order of operations between composition and differentiation. Similar usage appears often such as in or Here is treated as a function of and after applying the partial differentiation operator to , and the parenthesis on the right hand side is used to indicate that we first take the partial derivative with respect to to and then evaluate it at , while is treated as applying the partial differentiation operator to the function , which is a composition of with the function . All of these notations run some risk of creating some confusion; it would have been better to use a more explicit notation, such as naming as , then would have no ambiguity, but these notations are widely used and we will also use them.   We first work out by using the differentiability of at and of at : where as ; and where as , so we have The differentiability of at is equivalent to   Using the property of matrix norm on , we have therefore For , informally where and , But this argument has a minor flaw, for could be . To fix this issue, for any , there exists some such that whenever . Then using and as , we can find some such that when , , so Putting these together, when we have which shows the differentiability of at .      Suppose that and are inverse of each other: Suppose further that is differentiable at , with , and is differentiable at . Then As a result both and are inverse matrices of each other and .    Jacobian Matrix of Composite Function  Define and . Compute the Jacobian matrix of , , and .    Chain Rule Involving Polar Coordinates  Suppose that is differentiable for . Let be the polar coordinates of , namely . Compute the Jacobian matrix of and verify that     In Matrix form, this is written as     Note that we have abused the notation on the left hand side, as the function on the left hand side really represents the composition of with .  Note also that if we use instead of in the relation above we would get a simpler relation using an orthogonal matrix:         A Differentiability Criterion    Suppose that has partial derivatives in a neighborhood of and these partial derivatives are continuous at . Then is differentiable at .    Suppose that . It suffices to prove that each component function is differentiable at . For simplicity, we first write up a proof for the case of and set .  For , we have for some between and and some between and . Using the continuity at of the partial derivatives, for any , we can find some such that whenever , we have . This implies that which shows the differentiability of at . The general case can be worked out in a similar way.    The converse of the above theorem does not hold, even in one dimension. Here is a simple example: By definition, , and as , so it is differentiable at . Yet and it's clear that is not continuous near .   Differentiability of a norm function on   Consider the norm for some as a function on . Identify the set of points at which this function is differentiable. Repeat the exercise when the norm is .     "
},
{
  "id": "subsection-differentiation-2",
  "level": "2",
  "url": "ch-differentiaion-6.html#subsection-differentiation-2",
  "type": "Definition",
  "number": "5.3.1",
  "title": "Differentiability and Jacobian Matrix.",
  "body": "Differentiability and Jacobian Matrix   Suppose that and are normed vector spaces, that and is an interior point of . is said to be differentiable at if there exists a linear map with finite operator norm such that In other words, for any , there exists some such that   When and is differentiable at , the linear map can be represented as a matrix multiplication on in the usual rectangular coordinates. We will denote this matrix also by and call it the Jacobian matrix (also called Jacobian derivative or total derivative) of at and also denote it as .   "
},
{
  "id": "subsection-differentiation-4",
  "level": "2",
  "url": "ch-differentiaion-6.html#subsection-differentiation-4",
  "type": "Definition",
  "number": "5.3.2",
  "title": "Directional Derivative.",
  "body": "Directional Derivative   Suppose , is an interior point of , is any non-zero vector. is said to have directional derivative at in the direction , if the one variable function is differentiable at . In such a case the derivative of this one variable function at is called the directional derivative at in the direction , and is denoted as .   "
},
{
  "id": "subsection-differentiation-6",
  "level": "2",
  "url": "ch-differentiaion-6.html#subsection-differentiation-6",
  "type": "Remark",
  "number": "5.3.3",
  "title": "",
  "body": " The definition of differentiability involves the norm on and . But due to , when is finite dimensional, it does not matter what norm to use on . Similarly, when is finite dimensional, it does not matter what norm to use on .  "
},
{
  "id": "subsection-differentiation-7",
  "level": "2",
  "url": "ch-differentiaion-6.html#subsection-differentiation-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "partial derivative "
},
{
  "id": "subsection-differentiation-8",
  "level": "2",
  "url": "ch-differentiaion-6.html#subsection-differentiation-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "partial derivative "
},
{
  "id": "subsection-differentiation-9",
  "level": "2",
  "url": "ch-differentiaion-6.html#subsection-differentiation-9",
  "type": "Proposition",
  "number": "5.3.4",
  "title": "",
  "body": " Suppose that is differentiable at , with denoting its Jacobian matrix at , then it is continuous at . Furthermore, it has directional derivative in any direction at and the directional derivative of at in the direction equals . As a consequence, the entry of is , where .    The only part that we have not provided detail is to prove the continuity of at . For any , there exists some such that Then Using we can certainly adjust to make sure that when , we have , which would guarantee that , proving the continuity of at .   "
},
{
  "id": "subsection-differentiation-11",
  "level": "2",
  "url": "ch-differentiaion-6.html#subsection-differentiation-11",
  "type": "Example",
  "number": "5.3.5",
  "title": "",
  "body": "  We discuss below two examples showing that the answers to all the above questions are negative.    A function may have partial derivative at some in each direction, yet can fail to be continuous there, and does not have directional derivative in any direction except for the coordinate directions.    Here is a simple example for . Its restriction to either the or coordinate is identically zero, so its partial derivatives . Yet for any direction , which is not continuous at , unless . Thus is not continuous at and does not exist unless points along either the or coordinate axis.      A function may have directional derivative at some in each direction, yet can still fail to be differentiable there.    Here is a simple example for . For any direction , , so But it does not depend on in a linear fashion, so is not differentiable at .  A formal way of proving that this is not differentiable at is to argue by contradiction. If it were differentiable at , then the linear approximation must be given by . But it is easy to see by definition that . Thus we would have as . But that is not the case, as when , this quotient is , which does not tend to as .    "
},
{
  "id": "subsection-differentiation-12",
  "level": "2",
  "url": "ch-differentiaion-6.html#subsection-differentiation-12",
  "type": "Example",
  "number": "5.3.6",
  "title": "",
  "body": " A function may have directional derivative at some in each direction, yet can even fail to be continuous there. Here is a simple example   For any direction , has its derivative equal at . However, as , if we choose to satisfy , we would get , which is not .  "
},
{
  "id": "subsection-differentiation-13",
  "level": "2",
  "url": "ch-differentiaion-6.html#subsection-differentiation-13",
  "type": "Example",
  "number": "5.3.7",
  "title": "",
  "body": " A function may be differentiable at a point but may not have partial derivatives at nearby points. near is such an example.  "
},
{
  "id": "subsection-differentiation-15",
  "level": "2",
  "url": "ch-differentiaion-6.html#subsection-differentiation-15",
  "type": "Exercise",
  "number": "5.3.8",
  "title": "Mean Value Theorem.",
  "body": " Mean Value Theorem   Examine whether the mean value theorem holds for for .   "
},
{
  "id": "vecmeanvalue",
  "level": "2",
  "url": "ch-differentiaion-6.html#vecmeanvalue",
  "type": "Theorem",
  "number": "5.3.9",
  "title": "",
  "body": " Suppose that is a vector-valued function, differentiable on and continuous on , and that there exists some such that for all . Then .   If we assume, in addition, that is continuous on , then we have an easy proof using .  For the general case, it suffices to prove that for any , Fix any , if does not hold for some , let be the infimum of the values for which fails. First we show that . This follows from the continuity of at , as it shows that for some  holds for . By definition of , holds for any . By continuity of at  continues to hold at . Thus under our assumption. Then using , there exists some such that for , it then follows that, for , showing that continues to hold for , contradicting the definition of .   "
},
{
  "id": "subsection-differentiation-17",
  "level": "2",
  "url": "ch-differentiaion-6.html#subsection-differentiation-17",
  "type": "Remark",
  "number": "5.3.10",
  "title": "",
  "body": "For a function of several variables, in general it does not make sense to define differentiability in terms of the limit of the difference quotient as there is no meaningful quotient operation between vectors in a general context. There are some exceptions. When , there is a well defined multiplication and quotient between vectors in when we represent them as complex numbers. When a complex valued function satisfies it is said to have a complex derivative .  This is a stronger condition than the differentiability in the linear approximation sense over vectors in as introduced above, as that would give a function which is linear in over the reals, while this condition of having a complex derivative would imply and as a result so   In terms of vector operations in , corresponds to , where represents rotation with respect to the origin in of angle . If is merely differentiable in the linear approximation sense, then In fact, a complex valued function has a complex derivative at some if it is differentiable in the linear approximation sense, and the linear approximation further satisfies   "
},
{
  "id": "subsection-differentiation-19",
  "level": "2",
  "url": "ch-differentiaion-6.html#subsection-differentiation-19",
  "type": "Exercise",
  "number": "5.3.11",
  "title": "Matrix Commuting with Rotation Matrix.",
  "body": "Matrix Commuting with Rotation Matrix   Let . Verify that satisfies iff there exist some real such that . In fact, the same conclusion holds if we only require for some .   "
},
{
  "id": "thm-chainrule",
  "level": "2",
  "url": "ch-differentiaion-6.html#thm-chainrule",
  "type": "Theorem",
  "number": "5.3.12",
  "title": "",
  "body": " chain rule   Suppose that is differentiable at , with , and is differentiable at , then is differentiable at , with its Jacobian derivative given by the matrix product .  In component notation, this is or If we write and , then the above can be written as     Commutative diagrams for the Chain Rule    Function Maps       Jacobian Derivatives        Note that we use a parenthesis as a delimiter to delineate the order of operations between composition and differentiation. Similar usage appears often such as in or Here is treated as a function of and after applying the partial differentiation operator to , and the parenthesis on the right hand side is used to indicate that we first take the partial derivative with respect to to and then evaluate it at , while is treated as applying the partial differentiation operator to the function , which is a composition of with the function . All of these notations run some risk of creating some confusion; it would have been better to use a more explicit notation, such as naming as , then would have no ambiguity, but these notations are widely used and we will also use them.   We first work out by using the differentiability of at and of at : where as ; and where as , so we have The differentiability of at is equivalent to   Using the property of matrix norm on , we have therefore For , informally where and , But this argument has a minor flaw, for could be . To fix this issue, for any , there exists some such that whenever . Then using and as , we can find some such that when , , so Putting these together, when we have which shows the differentiability of at .    "
},
{
  "id": "subsec-chainrule-3",
  "level": "2",
  "url": "ch-differentiaion-6.html#subsec-chainrule-3",
  "type": "Example",
  "number": "5.3.14",
  "title": "",
  "body": " Suppose that and are inverse of each other: Suppose further that is differentiable at , with , and is differentiable at . Then As a result both and are inverse matrices of each other and .  "
},
{
  "id": "subsec-chainrule-4",
  "level": "2",
  "url": "ch-differentiaion-6.html#subsec-chainrule-4",
  "type": "Exercise",
  "number": "5.3.15",
  "title": "Jacobian Matrix of Composite Function.",
  "body": " Jacobian Matrix of Composite Function  Define and . Compute the Jacobian matrix of , , and .   "
},
{
  "id": "subsec-chainrule-5",
  "level": "2",
  "url": "ch-differentiaion-6.html#subsec-chainrule-5",
  "type": "Exercise",
  "number": "5.3.16",
  "title": "Chain Rule Involving Polar Coordinates.",
  "body": "Chain Rule Involving Polar Coordinates  Suppose that is differentiable for . Let be the polar coordinates of , namely . Compute the Jacobian matrix of and verify that     In Matrix form, this is written as     Note that we have abused the notation on the left hand side, as the function on the left hand side really represents the composition of with .  Note also that if we use instead of in the relation above we would get a simpler relation using an orthogonal matrix:      "
},
{
  "id": "thm-diffcrit",
  "level": "2",
  "url": "ch-differentiaion-6.html#thm-diffcrit",
  "type": "Theorem",
  "number": "5.3.17",
  "title": "",
  "body": "  Suppose that has partial derivatives in a neighborhood of and these partial derivatives are continuous at . Then is differentiable at .    Suppose that . It suffices to prove that each component function is differentiable at . For simplicity, we first write up a proof for the case of and set .  For , we have for some between and and some between and . Using the continuity at of the partial derivatives, for any , we can find some such that whenever , we have . This implies that which shows the differentiability of at . The general case can be worked out in a similar way.   "
},
{
  "id": "subsec-diffCrit-3",
  "level": "2",
  "url": "ch-differentiaion-6.html#subsec-diffCrit-3",
  "type": "Remark",
  "number": "5.3.18",
  "title": "",
  "body": "The converse of the above theorem does not hold, even in one dimension. Here is a simple example: By definition, , and as , so it is differentiable at . Yet and it's clear that is not continuous near .  "
},
{
  "id": "subsec-diffCrit-4",
  "level": "2",
  "url": "ch-differentiaion-6.html#subsec-diffCrit-4",
  "type": "Exercise",
  "number": "5.3.19",
  "title": "Differentiability of a norm function on <span class=\"process-math\">\\(\\bbR^{n}\\)<\/span>.",
  "body": "Differentiability of a norm function on   Consider the norm for some as a function on . Identify the set of points at which this function is differentiable. Repeat the exercise when the norm is .   "
},
{
  "id": "section-contraction",
  "level": "1",
  "url": "section-contraction.html",
  "type": "Section",
  "number": "5.4",
  "title": "Contraction Mapping Principle",
  "body": " Contraction Mapping Principle  A solution to an analysis problem can often be identified and obtained as a fixed point of a certain map. The Contraction Mapping Principle gives a sufficient condition to show the existence and uniqueness (in a specified setting) of a fixed point of a certain map.   contraction   A map of a metric space to itself is called a contraction if there exists some , such that      Suppose that is a contraction of . Then it can have at most one fixed point.    Suppose that are fixed points of , namely, . Then and imply that . This forces , proving that can have at most one fixed point.     Fixed Point Theorem of a Contraction  Fixed Point Theorem   Suppose that is a contraction of a complete metric space . Then it has a unique fixed point.    Pick any and define . Then define for recursively. It follows from the contraction property that This then leads to proving that is a Cauchy sequence in . Since is assumed to be complete, there exists some such that as . Since a contraction must be continuous, taking the limit in gives . This shows the existence of a fixed point. The uniqueness is given earlier.      Suppose that is a complete normed space and is an invertible linear map from onto another normed vector space with a finite operator norm for both itself and its inverse. Then any linear map with a finite operator norm satisfying is also invertible with its inverse having a finite operator norm.    The invertibility of is equivalent to the solvability of for any . But the latter is equivalent to , which is equivalent to . The solvability of the last equation is equivalent to the existence of a fixed point of But under our condition, is a contraction on , therefore, has a unique fixed point.  Furthermore, any fixed point satisfies from which and it follows that proving that has a finite operator norm, with .     Existence of a Local Solution of an Initial Value Problem of an ODE  Suppose that is a continuous function defined on , and that there exists some such that Then there exists some and a unique function in satisfying   A solution to is equivalent to a solution of which can be regarded as a fixed point of on an appropriate space . We will choose for appropriately chosen so that is a contraction on . Note that a fixed point in of is automatically in and satisfied the .  Since is continuous on , there exists some such that Then, for any , provided that is chosen such that .  Then for any , we have for . Thus if is chosen to further satisfy , then becomes a contraction on . Note that is a complete metric space with the metric . Thus the Contraction Mapping Principle is applicable and it implies the existence and uniqueness of a fixed point of in .  Note that if , then the fixed point in must coincide with fixed point in . Since any solution of must be a fixed point in for some , this shows the uniqueness in this context.   "
},
{
  "id": "def-contraction",
  "level": "2",
  "url": "section-contraction.html#def-contraction",
  "type": "Definition",
  "number": "5.4.1",
  "title": "",
  "body": " contraction   A map of a metric space to itself is called a contraction if there exists some , such that    "
},
{
  "id": "uniquefixedpt",
  "level": "2",
  "url": "section-contraction.html#uniquefixedpt",
  "type": "Proposition",
  "number": "5.4.2",
  "title": "",
  "body": " Suppose that is a contraction of . Then it can have at most one fixed point.    Suppose that are fixed points of , namely, . Then and imply that . This forces , proving that can have at most one fixed point.   "
},
{
  "id": "thm-fixedpt",
  "level": "2",
  "url": "section-contraction.html#thm-fixedpt",
  "type": "Theorem",
  "number": "5.4.3",
  "title": "Fixed Point Theorem of a Contraction.",
  "body": " Fixed Point Theorem of a Contraction  Fixed Point Theorem   Suppose that is a contraction of a complete metric space . Then it has a unique fixed point.    Pick any and define . Then define for recursively. It follows from the contraction property that This then leads to proving that is a Cauchy sequence in . Since is assumed to be complete, there exists some such that as . Since a contraction must be continuous, taking the limit in gives . This shows the existence of a fixed point. The uniqueness is given earlier.   "
},
{
  "id": "cor-invert",
  "level": "2",
  "url": "section-contraction.html#cor-invert",
  "type": "Corollary",
  "number": "5.4.4",
  "title": "",
  "body": "  Suppose that is a complete normed space and is an invertible linear map from onto another normed vector space with a finite operator norm for both itself and its inverse. Then any linear map with a finite operator norm satisfying is also invertible with its inverse having a finite operator norm.    The invertibility of is equivalent to the solvability of for any . But the latter is equivalent to , which is equivalent to . The solvability of the last equation is equivalent to the existence of a fixed point of But under our condition, is a contraction on , therefore, has a unique fixed point.  Furthermore, any fixed point satisfies from which and it follows that proving that has a finite operator norm, with .   "
},
{
  "id": "section-contraction-7",
  "level": "2",
  "url": "section-contraction.html#section-contraction-7",
  "type": "Example",
  "number": "5.4.5",
  "title": "Existence of a Local Solution of an Initial Value Problem of an ODE.",
  "body": " Existence of a Local Solution of an Initial Value Problem of an ODE  Suppose that is a continuous function defined on , and that there exists some such that Then there exists some and a unique function in satisfying   A solution to is equivalent to a solution of which can be regarded as a fixed point of on an appropriate space . We will choose for appropriately chosen so that is a contraction on . Note that a fixed point in of is automatically in and satisfied the .  Since is continuous on , there exists some such that Then, for any , provided that is chosen such that .  Then for any , we have for . Thus if is chosen to further satisfy , then becomes a contraction on . Note that is a complete metric space with the metric . Thus the Contraction Mapping Principle is applicable and it implies the existence and uniqueness of a fixed point of in .  Note that if , then the fixed point in must coincide with fixed point in . Since any solution of must be a fixed point in for some , this shows the uniqueness in this context.  "
},
{
  "id": "ch-differentiaion-8",
  "level": "1",
  "url": "ch-differentiaion-8.html",
  "type": "Section",
  "number": "5.5",
  "title": "Inverse and Implicit Function Theorems",
  "body": "Inverse and Implicit Function Theorems   Inverse Function Theorem   Suppose that is a differentiable mapping from a neighborhood of in into , with , and that is bijective and is continuous at . Then  There is a ball in and a neighborhood of in such that satisfying , and depends on continuously.  Denote the mapping by for . Then is differentiable at , and   If, furthermore, we assume that is in this neighborhood, then is in and       The heuristic idea is to use the differentiability of to approximate , when is near , by the mapping . If there were no remainder term, then solving would be equivalent to solving , which is straightforward under the assumption that is bijective. In the presence of the remainder we would need to solve Using and the invertibility assumption on , the above is equivalent to In other words, we look for a fixed point near of the mapping  is differentiable whenever is and The continuity assumption of at implies the existence of some such that By it follows that for . It remains to show that one can choose an open set containing such that when and .   Using if satisfies , where then, with , for any , So if we now take , then would be a contraction on , thus has a unique fixed point in it. In fact any fixed point satisfies . This gives a well defined inverse of on with , where is open and non-empty.  Next we prove the continuity of for . Set for , we examine where we use in the first two terms of in place of as its derivative in is , which satisfies when due to the continuity of at . Thus Multiplying both sides of by and using the above estimate gives This then implies which shows the (Lipschitz) continuity of on .   can also rewritten as where is defined with respect to either or and satisfies . This would lead to the same conclusion as .  Finally, the relation gives rise to Applying with we see that, as , This shows the differentiability of at with This concludes the proof.      In our formulation and proof, we take to be a ball and define on . Since is open and contains , there exists some such that , then is an open neighborhood of and is then a well defined inverse function of on this open set.  In fact one can also prove that has a well defined inverse on , where is chosen to satisfy .    Identify points where the function satisfies the conditions of the Inverse Function Theorem; at points where the conditions of the Inverse Function Theorem are not satisfied, examine the solvability of for near .     Compute the Jacobian matrix of the function and verify that it satisfies the conditions of the Inverse Function Theorem. Determine the largest disc around on which the function has a well-defined differentiable inverse function. Determine the largest disc around on which is a well-defined differentiable function. What if one drops the condition that or be a disc, but just requires it to be an open set?     A geometric application of the Inverse Function Theorem   Suppose that is a mapping from a neighborhood of in into ( ), with , that it has continuous partial derivatives and the submatrix , of the the Jacobian matrix invertible. Such an is called an immersion near .  Then by the Inverse Function Theorem the mapping has a differentiable inverse defined in a neighborhood of . Call it and let . Then is an open neighborhood of in , and any point for can be represented as for . Namely is represented as a graph over with continuous partial derivatives.  Note that could have been defined on a bigger domain , and the above discussion only says that when is restricted to a small domain near , is represented as a graph; it does not say that in a neighborhood of is represented as a graph.  A simple example is the Lemniscate of Genoro given by for . Its image in is a figure eight crossing the origin. Near , , so has an inverse near , from which one gets as a function of , and can be computed via the chain rule which evaluates to at . Note that in the case here the parametric curve can be represented explicitly as ; but this graph does not include the other branch crossing .  But we could equally apply the Inverse Function Theorem to at here, as , from which we get an inverse ---we can work out an explicit form for here, but we can carry on the analysis without knowing it. So the same parametric curve near can also be represented as .     Set for in the above setting. Use the chain rule to determine in terms of the .    Can the Inverse Function Theorem be applied to the Lemniscate of Genoro with respect to the variable at ? If so, find at where is a graph representation for .  Can the Inverse Function Theorem be applied with respect to the variable at , , and ? If so, find at the corresponding point.  Can the Inverse Function Theorem be applied with respect to the variable at ?      Implicit Function Theorem  We first introduce some notation. Suppose that is differentiable in at some . is used to represent the Jacobian derivative of at , which is a linear function on . We use to represent the restriction of this linear function on . In other words Similarly we define by   If is differentiable in when is held fixed, we also use to denote its derivative in at .  This notation has a small chance of getting confused with the notation for the directional derivative of at in the direction of , but one can usually tell the difference from the context.  Implicit Function Theorem  Let be a continuous mapping from a neighborhood of in into , with . Assume that is differentiable in the variable in this neighborhood and is continuous at . If is a bijection from onto , then  There is a ball in and a neighborhood of in such that satisfying , and depends on continuously.  Denote the mapping by . If is jointly in , then is in and       The heuristic for the first part is similar to that in proving the Inverse Function Theorem: for , use the linear approximation of in the variable to approximate ; more precisely, Then the equation is equivalent to or is a fixed point of the mapping   Then in a similar way one can show the existence of a unique fixed point in of when and are chosen appropriately so that satisfies for . This shows the existence of for .  In fact, there is some flexibility in setting up . One could use a modified such as and use its fixed point to construct .  To prove the continuity of , one takes and tries to use the relation and the information that as to show that .  But a standard application of the mean value theorem can only give an upper bound of in terms of . Since is close to when and , the derivative of with respect to is small in the same neighorhood. In other words, \"behaves like\" as a function of . We implement this as from which one gets One then uses that the derivative of can be made smaller than when to get which shows the continuity of .  The differentiability of is shown in the same way as in the proof of the Inverse Function Theorem.      If, for part 1, one assumes is jointly differentiable in and the derivatives are continuous at , then one can get a simple proof by using the Inverse Function Theorem. One simply defines Then , and the Jacobian matrix at is an invertible matrix, so there exist a neighborhood of , a neighborhood of , an inverse to defined on . When we restrict to and write out its and components, we get    The rule for determining the derivative of the implicit function is just a form of implicit differentiation. For example, on the level set , since , at any point where , the Implicit Function Theorem applies to imply that can be solved as a function of from , and from which one gets , .  Our formulation allows us to study when may not be differentiable in . E.g., is differentiable in , , is continuous with , so allows us to conclude that there exists a continuous for near with such that .  The formulation of specifies a splitting of the variables . In applications, one often has some flexibility in making a choice of the splitting. For example, suppose that has continuous partial derivatives, and one is interested in understanding the set for near ---this is called a level set of . here is a scalar function so any application of is to solve for one of the variables in terms of the remaining two.  To be able to solve in terms of , one needs to check whether as a linear map from to is invertible. In this case, this is equivalent to whether . But it's possible that or . Then it would mean that near the set can be described as a graph of in terms of or a graph of in terms of . Thus as long as one can apply with respect to one of the variables to conclude that the level set for near is given by the graph of a function of two of the variables.  Suppose is another function with continuous partial derivatives and one is interested in understanding the set . We are imposing two conditions, so an application of would need to solve for two of the variables in terms of the remaining single variable. Geometrically, the set above is the intersection of a level set of with a level set of .  Suppose that we want to check whether the conditions of hold for the variables, then we would need to check whether is invertible. One could formulate similar criteria with respect to the other choices of a pair of variables. Note that one just needs one of the invertibility criteria to hold to apply to conclude that the set in near is a curved represented as a graph over one of the three variables. Thus a streamlined condition is that the matrix has ranke . Geometrically, this means that the two row vectors of the above matrix are linearly independent.   From the structure of the proof, one can see that only the differentiability and continuity of maps, and the completeness of the underlying space (used in the iteration scheme in the proof of the contraction mapping theorem) are used. So the Inverse Function and Implicit Function Theorems easily generalize to infinite dimensional, complete normed vector spaces, which are called Banach spaces . The simplest examples of such spaces are of continuous functions on the interval with the norm .  The Inverse Function and Implicit Function Theorems are often used to establish local solvability of solutions near a known one. In geometric context, they are often used to construct manifolds . Below is an example.    A geometric application of the Implicit Function Theorem   Suppose that is a mapping from a neighborhood of in into ( ), with , that it has continuous partial derivatives and the submatrix , of the the Jacobian matrix invertible. Such an is called an submersion near  Then by the Implicit Function Theorem there is a neighborhood of , a neighborhood of , and a differentiable map such that for all . Furthermore, for any , the only solution in of such that the last -components of is must be given by this .  For describing the set of all solutions of , if satisfies the assumption that its Jabobian at any solution of is rank , then one can apply the Implicit Function Theorem near any solution and conclude that the set of solutions near any single solution is described by a graph over an -dimensional ball. These are examples of what are called manifolds. The simplest such cases are when , where the condition on the Jacobian becomes the non-vanishing of the gradient vector , and the resulting manifold is a piece of a hypersurface.  Here is a simple example of : the set represents the intersection of the hyperboloid and the vertical plane . We set and and check the rank of Since , which is whenever , so if the intersection does not contain any point with , the level set can be represented in the form of for some differentiable . The intersection has solutions with only when is the range . We can thus conclude that if is not in such a range, then the intersection can be represented in the form of for some differentiable .The derivatives can be found by implicit differentiation   In the above setting one could also apply the Implicit Function Theorem to the variables to represent the graph as functions of the variable.     Study the applicability of the Implicit Function Theorem with respect to the variables in the level set for in the range . When it is applicable, find and .    Limacon curve  The level set of is a curve called a Limacon ---we treat as a parameter.  Identify the point(s) where this curve intersects the axis and examine whether is applicable at the point---the result may depend on the value of the parameter .  Note that is a solution for any choice of . Examine the set of solutions near for different values of the parameter .      Examine the plots would give some idea of the behavior to expect.     Differentiability of the level set of  Consider as a function on . Identify conditions on and such that the level set near is the graph of a differentiable function of variables.    Foliation of a neighborhood by level surfaces  Suppose that is continuously differentiable in a neighborhood of , , and . Prove that there exist a ball , , and a continuously differentiable function defined for such that (a) , (b) , and (c) forms a neighborhood of .  Note that for each fixed , on the set , so this neighborhood is foliated by leaves which are level surfaces of .    Differentiability of eigenvectors and eigenvalues  Often we are interested in whether eigenvectors and eigenvalues of a matrix depend on the entries of the matrix in a continuous or differentiable way. Since any non-zero multiple of an eigenvector of a matrix is still an eigenvector, we need to impose some normalizing condition to speak of a continuously varying eigenvector.  Let be an matrix and satisfies for some . We normalize such that (We use the Euclidean metric here for its desirable differentiability). Then a unit norm eigenvector and eigenvalue pair of matrix can be formulated as to satisfy   Note that has continuous partial derivatives as a function of . Our aim is to solve for as a function of .   Claim . Suppose that is symmetric and is a simple eigenvector with eigenvalue , namely, the eigenspace of is one-dimensional and spanned by . Then there exists some and differentiable functions and defined for matrices with , such that holds with and .  According to the Implicit Function Theorem, we need to verify that is an invertible map of . But We need to establish the unique solvability in of for any given , .  Under our assumption, the matrix has rank and has a solution iff . Thus has a solution when , which determines uniquely: . , together with , then determine uniquely.  Note that the assumption that the matrix be symmetric is only used in the solvability criterion of , namely, . When the symmetry assumption of is dropped, but the eigenvalue is still assumped to be simple, the solvability criterion needs to be modified. The proper criterion is , where is any vector that solves . Such a is called a left eigenvector of associated with the eigenvalue . The left eigenvector is also unique up to scaling when the eigenvalue is simple. So we can continue to show the unique solvability of .  Question : Explore possible conclusions that can be drawn if either the symmetry assumption of or the simplicity assumption on the eigenspace be dropped entirely.   Hint : Examine the behavior of eigenvectors and eigenvalues of simple matrices.    "
},
{
  "id": "subsec-ift-2",
  "level": "2",
  "url": "ch-differentiaion-8.html#subsec-ift-2",
  "type": "Theorem",
  "number": "5.5.1",
  "title": "",
  "body": " Suppose that is a differentiable mapping from a neighborhood of in into , with , and that is bijective and is continuous at . Then  There is a ball in and a neighborhood of in such that satisfying , and depends on continuously.  Denote the mapping by for . Then is differentiable at , and   If, furthermore, we assume that is in this neighborhood, then is in and       The heuristic idea is to use the differentiability of to approximate , when is near , by the mapping . If there were no remainder term, then solving would be equivalent to solving , which is straightforward under the assumption that is bijective. In the presence of the remainder we would need to solve Using and the invertibility assumption on , the above is equivalent to In other words, we look for a fixed point near of the mapping  is differentiable whenever is and The continuity assumption of at implies the existence of some such that By it follows that for . It remains to show that one can choose an open set containing such that when and .   Using if satisfies , where then, with , for any , So if we now take , then would be a contraction on , thus has a unique fixed point in it. In fact any fixed point satisfies . This gives a well defined inverse of on with , where is open and non-empty.  Next we prove the continuity of for . Set for , we examine where we use in the first two terms of in place of as its derivative in is , which satisfies when due to the continuity of at . Thus Multiplying both sides of by and using the above estimate gives This then implies which shows the (Lipschitz) continuity of on .   can also rewritten as where is defined with respect to either or and satisfies . This would lead to the same conclusion as .  Finally, the relation gives rise to Applying with we see that, as , This shows the differentiability of at with This concludes the proof.   "
},
{
  "id": "subsec-ift-3",
  "level": "2",
  "url": "ch-differentiaion-8.html#subsec-ift-3",
  "type": "Remark",
  "number": "5.5.2",
  "title": "",
  "body": "In our formulation and proof, we take to be a ball and define on . Since is open and contains , there exists some such that , then is an open neighborhood of and is then a well defined inverse function of on this open set.  In fact one can also prove that has a well defined inverse on , where is chosen to satisfy .  "
},
{
  "id": "subsec-ift-4",
  "level": "2",
  "url": "ch-differentiaion-8.html#subsec-ift-4",
  "type": "Exercise",
  "number": "5.5.3",
  "title": "",
  "body": " Identify points where the function satisfies the conditions of the Inverse Function Theorem; at points where the conditions of the Inverse Function Theorem are not satisfied, examine the solvability of for near .   "
},
{
  "id": "subsec-ift-5",
  "level": "2",
  "url": "ch-differentiaion-8.html#subsec-ift-5",
  "type": "Exercise",
  "number": "5.5.4",
  "title": "",
  "body": " Compute the Jacobian matrix of the function and verify that it satisfies the conditions of the Inverse Function Theorem. Determine the largest disc around on which the function has a well-defined differentiable inverse function. Determine the largest disc around on which is a well-defined differentiable function. What if one drops the condition that or be a disc, but just requires it to be an open set?   "
},
{
  "id": "subsec-ift-6",
  "level": "2",
  "url": "ch-differentiaion-8.html#subsec-ift-6",
  "type": "Example",
  "number": "5.5.5",
  "title": "A geometric application of the Inverse Function Theorem.",
  "body": " A geometric application of the Inverse Function Theorem   Suppose that is a mapping from a neighborhood of in into ( ), with , that it has continuous partial derivatives and the submatrix , of the the Jacobian matrix invertible. Such an is called an immersion near .  Then by the Inverse Function Theorem the mapping has a differentiable inverse defined in a neighborhood of . Call it and let . Then is an open neighborhood of in , and any point for can be represented as for . Namely is represented as a graph over with continuous partial derivatives.  Note that could have been defined on a bigger domain , and the above discussion only says that when is restricted to a small domain near , is represented as a graph; it does not say that in a neighborhood of is represented as a graph.  A simple example is the Lemniscate of Genoro given by for . Its image in is a figure eight crossing the origin. Near , , so has an inverse near , from which one gets as a function of , and can be computed via the chain rule which evaluates to at . Note that in the case here the parametric curve can be represented explicitly as ; but this graph does not include the other branch crossing .  But we could equally apply the Inverse Function Theorem to at here, as , from which we get an inverse ---we can work out an explicit form for here, but we can carry on the analysis without knowing it. So the same parametric curve near can also be represented as .   "
},
{
  "id": "subsec-ift-7",
  "level": "2",
  "url": "ch-differentiaion-8.html#subsec-ift-7",
  "type": "Exercise",
  "number": "5.5.6",
  "title": "",
  "body": " Set for in the above setting. Use the chain rule to determine in terms of the .   "
},
{
  "id": "subsec-ift-8",
  "level": "2",
  "url": "ch-differentiaion-8.html#subsec-ift-8",
  "type": "Exercise",
  "number": "5.5.7",
  "title": "",
  "body": "Can the Inverse Function Theorem be applied to the Lemniscate of Genoro with respect to the variable at ? If so, find at where is a graph representation for .  Can the Inverse Function Theorem be applied with respect to the variable at , , and ? If so, find at the corresponding point.  Can the Inverse Function Theorem be applied with respect to the variable at ?   "
},
{
  "id": "implicitFT",
  "level": "2",
  "url": "ch-differentiaion-8.html#implicitFT",
  "type": "Theorem",
  "number": "5.5.8",
  "title": "Implicit Function Theorem.",
  "body": "Implicit Function Theorem  Let be a continuous mapping from a neighborhood of in into , with . Assume that is differentiable in the variable in this neighborhood and is continuous at . If is a bijection from onto , then  There is a ball in and a neighborhood of in such that satisfying , and depends on continuously.  Denote the mapping by . If is jointly in , then is in and       The heuristic for the first part is similar to that in proving the Inverse Function Theorem: for , use the linear approximation of in the variable to approximate ; more precisely, Then the equation is equivalent to or is a fixed point of the mapping   Then in a similar way one can show the existence of a unique fixed point in of when and are chosen appropriately so that satisfies for . This shows the existence of for .  In fact, there is some flexibility in setting up . One could use a modified such as and use its fixed point to construct .  To prove the continuity of , one takes and tries to use the relation and the information that as to show that .  But a standard application of the mean value theorem can only give an upper bound of in terms of . Since is close to when and , the derivative of with respect to is small in the same neighorhood. In other words, \"behaves like\" as a function of . We implement this as from which one gets One then uses that the derivative of can be made smaller than when to get which shows the continuity of .  The differentiability of is shown in the same way as in the proof of the Inverse Function Theorem.   "
},
{
  "id": "subsec-impft-6",
  "level": "2",
  "url": "ch-differentiaion-8.html#subsec-impft-6",
  "type": "Remark",
  "number": "5.5.9",
  "title": "",
  "body": " If, for part 1, one assumes is jointly differentiable in and the derivatives are continuous at , then one can get a simple proof by using the Inverse Function Theorem. One simply defines Then , and the Jacobian matrix at is an invertible matrix, so there exist a neighborhood of , a neighborhood of , an inverse to defined on . When we restrict to and write out its and components, we get   "
},
{
  "id": "subsec-impft-7",
  "level": "2",
  "url": "ch-differentiaion-8.html#subsec-impft-7",
  "type": "Remark",
  "number": "5.5.10",
  "title": "",
  "body": "The rule for determining the derivative of the implicit function is just a form of implicit differentiation. For example, on the level set , since , at any point where , the Implicit Function Theorem applies to imply that can be solved as a function of from , and from which one gets , .  Our formulation allows us to study when may not be differentiable in . E.g., is differentiable in , , is continuous with , so allows us to conclude that there exists a continuous for near with such that .  The formulation of specifies a splitting of the variables . In applications, one often has some flexibility in making a choice of the splitting. For example, suppose that has continuous partial derivatives, and one is interested in understanding the set for near ---this is called a level set of . here is a scalar function so any application of is to solve for one of the variables in terms of the remaining two.  To be able to solve in terms of , one needs to check whether as a linear map from to is invertible. In this case, this is equivalent to whether . But it's possible that or . Then it would mean that near the set can be described as a graph of in terms of or a graph of in terms of . Thus as long as one can apply with respect to one of the variables to conclude that the level set for near is given by the graph of a function of two of the variables.  Suppose is another function with continuous partial derivatives and one is interested in understanding the set . We are imposing two conditions, so an application of would need to solve for two of the variables in terms of the remaining single variable. Geometrically, the set above is the intersection of a level set of with a level set of .  Suppose that we want to check whether the conditions of hold for the variables, then we would need to check whether is invertible. One could formulate similar criteria with respect to the other choices of a pair of variables. Note that one just needs one of the invertibility criteria to hold to apply to conclude that the set in near is a curved represented as a graph over one of the three variables. Thus a streamlined condition is that the matrix has ranke . Geometrically, this means that the two row vectors of the above matrix are linearly independent.  "
},
{
  "id": "subsec-impft-8",
  "level": "2",
  "url": "ch-differentiaion-8.html#subsec-impft-8",
  "type": "Remark",
  "number": "5.5.11",
  "title": "",
  "body": "From the structure of the proof, one can see that only the differentiability and continuity of maps, and the completeness of the underlying space (used in the iteration scheme in the proof of the contraction mapping theorem) are used. So the Inverse Function and Implicit Function Theorems easily generalize to infinite dimensional, complete normed vector spaces, which are called Banach spaces . The simplest examples of such spaces are of continuous functions on the interval with the norm .  The Inverse Function and Implicit Function Theorems are often used to establish local solvability of solutions near a known one. In geometric context, they are often used to construct manifolds . Below is an example.  "
},
{
  "id": "subsec-impft-9",
  "level": "2",
  "url": "ch-differentiaion-8.html#subsec-impft-9",
  "type": "Example",
  "number": "5.5.12",
  "title": "A geometric application of the Implicit Function Theorem.",
  "body": " A geometric application of the Implicit Function Theorem   Suppose that is a mapping from a neighborhood of in into ( ), with , that it has continuous partial derivatives and the submatrix , of the the Jacobian matrix invertible. Such an is called an submersion near  Then by the Implicit Function Theorem there is a neighborhood of , a neighborhood of , and a differentiable map such that for all . Furthermore, for any , the only solution in of such that the last -components of is must be given by this .  For describing the set of all solutions of , if satisfies the assumption that its Jabobian at any solution of is rank , then one can apply the Implicit Function Theorem near any solution and conclude that the set of solutions near any single solution is described by a graph over an -dimensional ball. These are examples of what are called manifolds. The simplest such cases are when , where the condition on the Jacobian becomes the non-vanishing of the gradient vector , and the resulting manifold is a piece of a hypersurface.  Here is a simple example of : the set represents the intersection of the hyperboloid and the vertical plane . We set and and check the rank of Since , which is whenever , so if the intersection does not contain any point with , the level set can be represented in the form of for some differentiable . The intersection has solutions with only when is the range . We can thus conclude that if is not in such a range, then the intersection can be represented in the form of for some differentiable .The derivatives can be found by implicit differentiation   In the above setting one could also apply the Implicit Function Theorem to the variables to represent the graph as functions of the variable.   "
},
{
  "id": "subsec-impft-10",
  "level": "2",
  "url": "ch-differentiaion-8.html#subsec-impft-10",
  "type": "Exercise",
  "number": "5.5.13",
  "title": "",
  "body": " Study the applicability of the Implicit Function Theorem with respect to the variables in the level set for in the range . When it is applicable, find and .   "
},
{
  "id": "subsec-impft-11",
  "level": "2",
  "url": "ch-differentiaion-8.html#subsec-impft-11",
  "type": "Exercise",
  "number": "5.5.14",
  "title": "Limacon  curve.",
  "body": "Limacon curve  The level set of is a curve called a Limacon ---we treat as a parameter.  Identify the point(s) where this curve intersects the axis and examine whether is applicable at the point---the result may depend on the value of the parameter .  Note that is a solution for any choice of . Examine the set of solutions near for different values of the parameter .      Examine the plots would give some idea of the behavior to expect.   "
},
{
  "id": "subsec-impft-12",
  "level": "2",
  "url": "ch-differentiaion-8.html#subsec-impft-12",
  "type": "Exercise",
  "number": "5.5.15",
  "title": "Differentiability of the level set of <span class=\"process-math\">\\(\\Vert \\bx \\Vert =c\\)<\/span>.",
  "body": " Differentiability of the level set of  Consider as a function on . Identify conditions on and such that the level set near is the graph of a differentiable function of variables.   "
},
{
  "id": "ex-foliation",
  "level": "2",
  "url": "ch-differentiaion-8.html#ex-foliation",
  "type": "Exercise",
  "number": "5.5.16",
  "title": "Foliation of a neighborhood by level surfaces.",
  "body": "Foliation of a neighborhood by level surfaces  Suppose that is continuously differentiable in a neighborhood of , , and . Prove that there exist a ball , , and a continuously differentiable function defined for such that (a) , (b) , and (c) forms a neighborhood of .  Note that for each fixed , on the set , so this neighborhood is foliated by leaves which are level surfaces of .   "
},
{
  "id": "subsec-impft-14",
  "level": "2",
  "url": "ch-differentiaion-8.html#subsec-impft-14",
  "type": "Example",
  "number": "5.5.17",
  "title": "Differentiability of eigenvectors and eigenvalues.",
  "body": "Differentiability of eigenvectors and eigenvalues  Often we are interested in whether eigenvectors and eigenvalues of a matrix depend on the entries of the matrix in a continuous or differentiable way. Since any non-zero multiple of an eigenvector of a matrix is still an eigenvector, we need to impose some normalizing condition to speak of a continuously varying eigenvector.  Let be an matrix and satisfies for some . We normalize such that (We use the Euclidean metric here for its desirable differentiability). Then a unit norm eigenvector and eigenvalue pair of matrix can be formulated as to satisfy   Note that has continuous partial derivatives as a function of . Our aim is to solve for as a function of .   Claim . Suppose that is symmetric and is a simple eigenvector with eigenvalue , namely, the eigenspace of is one-dimensional and spanned by . Then there exists some and differentiable functions and defined for matrices with , such that holds with and .  According to the Implicit Function Theorem, we need to verify that is an invertible map of . But We need to establish the unique solvability in of for any given , .  Under our assumption, the matrix has rank and has a solution iff . Thus has a solution when , which determines uniquely: . , together with , then determine uniquely.  Note that the assumption that the matrix be symmetric is only used in the solvability criterion of , namely, . When the symmetry assumption of is dropped, but the eigenvalue is still assumped to be simple, the solvability criterion needs to be modified. The proper criterion is , where is any vector that solves . Such a is called a left eigenvector of associated with the eigenvalue . The left eigenvector is also unique up to scaling when the eigenvalue is simple. So we can continue to show the unique solvability of .  Question : Explore possible conclusions that can be drawn if either the symmetry assumption of or the simplicity assumption on the eigenspace be dropped entirely.   Hint : Examine the behavior of eigenvectors and eigenvalues of simple matrices.  "
},
{
  "id": "section-higherderiv",
  "level": "1",
  "url": "section-higherderiv.html",
  "type": "Section",
  "number": "5.6",
  "title": "Higher Order Derivatives and Taylor Expansion",
  "body": " Higher Order Derivatives and Taylor Expansion  When is differentiable in , then its Jacobian matrix can be considered as a map from into the vector space of matrices, which can be identified with . Thus it makes sense to consider whether is differentiable in .  If is differentiable at , then for with is small, where is a linear map from into the vector space of matrices : if and , then each of the component of is differentiable at and has directional derivatives at in any direction, and In terms of the entry of the output matrix, it is These quantities are called the second derivatives of . Other commonly used notations for the second derivatives of a function include or , or ; sometimes the superscript that indicates the order of the derivative is omitted. Note that the order of the subscripts in is in reverse order from , as the former intends to indicate applying the partial differnetiation to the right of , first in then in , while the latter means the same, but the operator is applied first on the left of , then the operator . Fortunately, by Clairaut's theorem to be discussed below, under reasonable conditions, the order of the subscripts in the notation is not important, as long as we understand that they are both second derivatives.  We will not spend energy on the more abstract concept of higher order differentials, but focus on the higher order (partial) derivatives of a scalar-valued function, where we define, say, third order derivatives of a scalar function via when this derivative is defined. We will often work in a setting where all the th order partial derivatives of a function are continuous in a region, therefore any of its th order partial derivatives, for , are differentiable.  One basic question is whether the order in which to take the different mixed higher order derivatives affects the outcomes.   Define for . Then , and So for this function. But this property does require some conditions on the function.  Consider Then at , so we see that We can also verify directly by definition that and to compute , we only need to examine the derivative with respect to of , which gives ; while to compute , we only need to examine the derivative with respect to of , which gives . Thus     Clairault Theorem   Suppose that exist in a neighborhood of and are continuous at . Then exists and equals .    We may set , , and . Then we need to show that exists and equals . But Applying the mean value theorem to as a function of , we get for some between and which may also depend on . Applying the mean value theorem to as a function of , we get for some between and . Using the continuity of at , it follows that      Note that both the formulation and proof of Clairault's theorem only involve the behavior of the function along the plane spanned by two specific coordinate directions, so it does not by itself imply the differentiability of . In fact, it is possible to have a function of two variables such that exist and , yet may fail to be differentiable. Here is a simple example: Fortunately in most context we will work with functions whose second order derivatives are continuous in the domain of interest so the first order derivatives are differentiable.       space   Suppose that is open and . We define to be the space of functions which have th order continuous partial derivatives in for . When we say functions in are continuously differentiable in , and when , we say that functions in are -times continuously differentiable in . We define to be the space of functions in such that each of its th order partial derivative has a continuous extension to .    For any multi-index we denote . Note that defines a norm on and makes the latter a complete metric space.  Suppose that and . Take any vector and consider as a one variable function of for near . Then by the chain rule Then the one variable Taylor expansion gives rise to The remainder has the property that as .  To get the dependence of in on , we use a version of with an integral remainder term: , from which we find   For , if we make the change of variable in the above integral, we see that equals so is actually a function of and .  Using the continuity of at , we find that, for any , there exists some such that for all with . Thus when , we have where we have used .  We summarize this as  Taylor Expansion  Suppose that and . Then the th order Taylor expansion of at , , defined as satisfies Furthermore, under the assumption here, for any subdomain of such that the closure of is compact and any , there exists such that      can also be established under the weaker assumption that all partial derivatives of of order up to are defined and continuous in a neighborhood of , and all all partial derivatives of of order are differentiable at ; one just needs to apply with replacing and uses the differentiability of the partial derivatives of of order at .   is a polynomial in of degree at most . There are contexts where one works with a function with the property that at some , there exists a polynomial in of degree at most , such that When this holds, such a is unique and is differentiable at with , , but may not have derivatives at all nearby points.   The expansion is used often when , where we can write with denoting the Hessian matrix of at with entries , and denoting the transpose of . If is an interior minimum of , then for any vector , the one variable function has as an interior minimum. Therefore This then implies that the Hessian matrix is non-negative definite. Conversely, if is an interior critical point of a twice continuously differentiable , namely, for all , and is positive definite, then the Taylor expansion of order above would show that is a local minimum of .    Prove under the assumption that all partial derivatives of of order up to are defined and continuous in a neighborhood of , and all partial derivatives of of order are differentiable at .    Use with the integral remainder term at order and use the differentiability of the order partial derivatives of at , which appear in in the integral remainder term.    Prove that, if holds for some , then it is unique.   Construct an example of a function such that holds for some , but fails to have derivatives at a sequence .  "
},
{
  "id": "section-higherderiv-3",
  "level": "2",
  "url": "section-higherderiv.html#section-higherderiv-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "second derivatives "
},
{
  "id": "section-higherderiv-6",
  "level": "2",
  "url": "section-higherderiv.html#section-higherderiv-6",
  "type": "Example",
  "number": "5.6.1",
  "title": "",
  "body": " Define for . Then , and So for this function. But this property does require some conditions on the function.  Consider Then at , so we see that We can also verify directly by definition that and to compute , we only need to examine the derivative with respect to of , which gives ; while to compute , we only need to examine the derivative with respect to of , which gives . Thus   "
},
{
  "id": "thm-clairaut",
  "level": "2",
  "url": "section-higherderiv.html#thm-clairaut",
  "type": "Theorem",
  "number": "5.6.2",
  "title": "Clairault Theorem.",
  "body": " Clairault Theorem   Suppose that exist in a neighborhood of and are continuous at . Then exists and equals .    We may set , , and . Then we need to show that exists and equals . But Applying the mean value theorem to as a function of , we get for some between and which may also depend on . Applying the mean value theorem to as a function of , we get for some between and . Using the continuity of at , it follows that    "
},
{
  "id": "section-higherderiv-8",
  "level": "2",
  "url": "section-higherderiv.html#section-higherderiv-8",
  "type": "Remark",
  "number": "5.6.3",
  "title": "",
  "body": " Note that both the formulation and proof of Clairault's theorem only involve the behavior of the function along the plane spanned by two specific coordinate directions, so it does not by itself imply the differentiability of . In fact, it is possible to have a function of two variables such that exist and , yet may fail to be differentiable. Here is a simple example: Fortunately in most context we will work with functions whose second order derivatives are continuous in the domain of interest so the first order derivatives are differentiable.  "
},
{
  "id": "c-k",
  "level": "2",
  "url": "section-higherderiv.html#c-k",
  "type": "Definition",
  "number": "5.6.4",
  "title": "",
  "body": "    space   Suppose that is open and . We define to be the space of functions which have th order continuous partial derivatives in for . When we say functions in are continuously differentiable in , and when , we say that functions in are -times continuously differentiable in . We define to be the space of functions in such that each of its th order partial derivative has a continuous extension to .   "
},
{
  "id": "thm-taylor",
  "level": "2",
  "url": "section-higherderiv.html#thm-taylor",
  "type": "Theorem",
  "number": "5.6.5",
  "title": "Taylor Expansion.",
  "body": "Taylor Expansion  Suppose that and . Then the th order Taylor expansion of at , , defined as satisfies Furthermore, under the assumption here, for any subdomain of such that the closure of is compact and any , there exists such that    "
},
{
  "id": "section-higherderiv-17",
  "level": "2",
  "url": "section-higherderiv.html#section-higherderiv-17",
  "type": "Remark",
  "number": "5.6.6",
  "title": "",
  "body": " can also be established under the weaker assumption that all partial derivatives of of order up to are defined and continuous in a neighborhood of , and all all partial derivatives of of order are differentiable at ; one just needs to apply with replacing and uses the differentiability of the partial derivatives of of order at .   is a polynomial in of degree at most . There are contexts where one works with a function with the property that at some , there exists a polynomial in of degree at most , such that When this holds, such a is unique and is differentiable at with , , but may not have derivatives at all nearby points.  "
},
{
  "id": "section-higherderiv-19",
  "level": "2",
  "url": "section-higherderiv.html#section-higherderiv-19",
  "type": "Exercise",
  "number": "5.6.7",
  "title": "",
  "body": "  Prove under the assumption that all partial derivatives of of order up to are defined and continuous in a neighborhood of , and all partial derivatives of of order are differentiable at .    Use with the integral remainder term at order and use the differentiability of the order partial derivatives of at , which appear in in the integral remainder term.   "
},
{
  "id": "section-higherderiv-20",
  "level": "2",
  "url": "section-higherderiv.html#section-higherderiv-20",
  "type": "Exercise",
  "number": "5.6.8",
  "title": "",
  "body": "Prove that, if holds for some , then it is unique.  "
},
{
  "id": "section-higherderiv-21",
  "level": "2",
  "url": "section-higherderiv.html#section-higherderiv-21",
  "type": "Exercise",
  "number": "5.6.9",
  "title": "",
  "body": "Construct an example of a function such that holds for some , but fails to have derivatives at a sequence . "
},
{
  "id": "ch-differentiaion-10",
  "level": "1",
  "url": "ch-differentiaion-10.html",
  "type": "Section",
  "number": "5.7",
  "title": "Differentiation of Integrals",
  "body": "Differentiation of Integrals  Suppose that is differentiable with respect to when each is held fixed. We are interested in knowing under what conditions the following holds   The question is really a case of , or our extension . For it is really asking whether The condition in requires that be a finite interval and uniformly over as . Since the mean value theorem gives us for some depending on , a sufficient condition for this uniform convergence is the following condition: For any there exists a such that for all    When the uniform integrability fails, differentiation under the integral may not hold.  Differentiability of the integral  The integrand is continuously differentiable in the first quadrant. For any , as , so we may extend to make the resulting function continuous for (is it continuous at ?). We can consider either as , or the limit of as .  In the particular example here, which tends to as . On the other hand, for every as . It is instructive to examine how the uniform integrability has failed here.  This example is constructed based on an earlier example when examining We simply replace by to get this example.   When the interval of integration is unbounded, even if we can make , uniformly for all in the interval of integration and with , this may not guarantee that is small when or is infinite.  For definiteness of exposition, let's assume to be finite and . We will also use in place of . Our strategy is to break the integral into an integral on a finite integral, which we can handle by the earlier method, and the tail part, which will be made small by some reasonable assumption. More specifically, we assume that the improper integral converges uniformly with respect to in some neighborhood  of , namely,  For any , there exists such that for any , for all .    Suppose that there exists a neighborhood of such that and are continuous in , that the improper integral converges for , and that the improper integral converges uniformly with respect to in . Then is differentiable for , and for .    First we break up the integrals into parts and estimate them separately   Next, we apply the fundamental theorem of calculus to to get so using the uniform integrability of we get, for , Therefore, We also have For , we apply our earlier argument to find a such that when , we have This concludes our proof.    Differentiation of a Poisson Integral  Consider the Poisson integral on the upper half plane , where is a given bounded function.  To consider the differentiability of for near with , note that the integrand is continuous for , where is the disk of radius centered at with , so that when , we have ; is also differentiable in for .  To verify the uniform convergence of the improper integral , we need to start with , and look for such that for any , In fact, to verify differentiability in at , it suffices to check the above inequality for near and . The main focus will be to make sure that tends to at a sufficiently fast rate in as , with uniform control on the coefficients for near , such that the above estimate holds; so we will watch out for how depends on and .  Since where for all . We argue that when is near , and , will be large; more precisely, for is sufficiently near , we have , and , if is chosen so that , then which can be made smaller than when is sufficiently large, as the integral is convergent.  Note that is considered fixed in this argument; there will be difficulty to verify the uniform integrability if we allow .    Differentiation of the integral     Check whether satisfies the uniform convergence criterion near and , where is the integrand.  Determine whether .     "
},
{
  "id": "ch-differentiaion-10-5",
  "level": "2",
  "url": "ch-differentiaion-10.html#ch-differentiaion-10-5",
  "type": "Example",
  "number": "5.7.1",
  "title": "Differentiability of the integral <span class=\"process-math\">\\(\\int_{0}^{1}\\frac{t^{2}x}{(t+x)^{3}}\\,dx\\)<\/span>.",
  "body": "Differentiability of the integral  The integrand is continuously differentiable in the first quadrant. For any , as , so we may extend to make the resulting function continuous for (is it continuous at ?). We can consider either as , or the limit of as .  In the particular example here, which tends to as . On the other hand, for every as . It is instructive to examine how the uniform integrability has failed here.  This example is constructed based on an earlier example when examining We simply replace by to get this example.  "
},
{
  "id": "ch-differentiaion-10-9",
  "level": "2",
  "url": "ch-differentiaion-10.html#ch-differentiaion-10-9",
  "type": "Theorem",
  "number": "5.7.2",
  "title": "",
  "body": " Suppose that there exists a neighborhood of such that and are continuous in , that the improper integral converges for , and that the improper integral converges uniformly with respect to in . Then is differentiable for , and for .    First we break up the integrals into parts and estimate them separately   Next, we apply the fundamental theorem of calculus to to get so using the uniform integrability of we get, for , Therefore, We also have For , we apply our earlier argument to find a such that when , we have This concludes our proof.   "
},
{
  "id": "ch-differentiaion-10-10",
  "level": "2",
  "url": "ch-differentiaion-10.html#ch-differentiaion-10-10",
  "type": "Example",
  "number": "5.7.3",
  "title": "Differentiation of a Poisson Integral.",
  "body": "Differentiation of a Poisson Integral  Consider the Poisson integral on the upper half plane , where is a given bounded function.  To consider the differentiability of for near with , note that the integrand is continuous for , where is the disk of radius centered at with , so that when , we have ; is also differentiable in for .  To verify the uniform convergence of the improper integral , we need to start with , and look for such that for any , In fact, to verify differentiability in at , it suffices to check the above inequality for near and . The main focus will be to make sure that tends to at a sufficiently fast rate in as , with uniform control on the coefficients for near , such that the above estimate holds; so we will watch out for how depends on and .  Since where for all . We argue that when is near , and , will be large; more precisely, for is sufficiently near , we have , and , if is chosen so that , then which can be made smaller than when is sufficiently large, as the integral is convergent.  Note that is considered fixed in this argument; there will be difficulty to verify the uniform integrability if we allow .  "
},
{
  "id": "ch-differentiaion-10-11",
  "level": "2",
  "url": "ch-differentiaion-10.html#ch-differentiaion-10-11",
  "type": "Exercise",
  "number": "5.7.4",
  "title": "Differentiation of the integral <span class=\"process-math\">\\(F(t)=\\int_{\\mathbb R} \\frac{dx}{(1+t^2x^2)(1+x^2)}\\)<\/span>.",
  "body": " Differentiation of the integral     Check whether satisfies the uniform convergence criterion near and , where is the integrand.  Determine whether .    "
},
{
  "id": "ch-differentiaion-11",
  "level": "1",
  "url": "ch-differentiaion-11.html",
  "type": "Section",
  "number": "5.8",
  "title": "Convexity and Some Applications",
  "body": "Convexity and Some Applications  Convexity plays an important role in many extremal problems and inequalities. We include this section here to illustrate how some of the continuity and compactness arguments are used in the context of convex functions.  Convex sets vs Convex Functions  The notion of a convex set in is more general than that of a convex function.  Convex set   A set in is called convex, if for any and any , we have .   Geometrically, the set is the line segment in with as its ends. A convex set needs not have any interior point.  Convex Function   A real-valued function defined on a convex set is called convex, if for any and any , we have   is called strictly convex if we have the strict inequality   is called concave if is convex. Equivalently, the defining inequality above is reversed for a concave function.    Geometrically, if we construct a line in through the points , then it has parametric equation so is the height of the line above the point  . When is convex, stays below the height at of the above line segment for . Here is a Desmos page illustrating this geometric property.   is a convex function iff the set in , called the epigraph of , is convex. Another characterization of a convex function is that for every real number , the sub level set of defined by is a convex set.  Because of this relation, properties of convex functions can often be studied as properties of convex functions. We will later discuss briefly the notion of supporting hyperplane of a convex set and that of the graph of a convex function.   Review of Properties of Univariate Convex Functions  The illustration above in the previous subsection also includes a sketch of the argument that the slope of the secant lines on a convex function of a single variable is an increasing function. Geometrically it seems clear that if is a convex function of a single variable on an interval that contains , then stays above the secant line through . This can be derived from the above property of secant lines: for , These inequalities also hold when .  The continuity of a convex function of one variable at an interior point is proved using these bounds by linear functions. Say, is an interior point. Then there exist in the domain such that , and the above property of secant lines implies that for any , Then the sandwich theorem implies that as . The direction when is done in a similar way.  How can we extend this argument to higher dimensions?  A convex function is certainly continuous at an interior point when constrained along any one-dimensional lines, but there are infinitely many lines through any given point. Here we will see some ideas of compactness at play.   We will assume that the origin is in the interior of the domain of ; in fact, we will assume the domain of includes the unit ball centered at the origin, and describe ideas to prove the continuity of at the origin.  On key idea is that there exist a finite number of points on the unit sphere , in fact points, such that any with sufficiently small can be written as , where are among the points on the unit sphere. Technically where . If we set , and when , , and , , then we get . The condition is satisfied when for, by the Cauchy-Schwarz inequality   It then follows that where is chosen so that for all . This implies that We can certainly cover by a finite number of similarly constructed sets, and carry out this argument, which would allow us to prove that   To prove , we use the property of the secant lines as done in the one-dimensional case. For any such that . We bound from below by the secant line through : Since the slope has a lower bound due to the upper bound of , this allows us to conclude that .    The secant line property of a convex function implies that, if is in the domain of a convex function, then the slope of the secant line has a limit as , although this limit could be . If is an interior point of the domain, then picking some in the domain implies a lower bound of in terms of when , so in such a case, has a finite left derivative  and right derivative  at , and . Furthermore, for any , This then implies that Since the right hand side, , represents a straight line, the above inequality shows that a convex function has a (linear) support function at any interior point of its domain.  The support function property of a convex function can be used to give a simple proof of Jensen's inequality.  Jensen's inequality   Suppose that and is a density function on , namely, . Suppose that is convex, then In words, evaluated at the average of is not more than the average of .     Set . It is easy to rule out the possibility that or , so we may assume that . Using the support property of at , there exists some such that Substituting by , multiplying the above inequality by and integrating over , we get The right hand side is simply , which proves the Jensen's inequality.    Commonly used cases of Jensen's inequalities include or . Proofs for Hlder's and Minkowski's inequalities also use convexity in crucial ways.    Prove that for     Some Properties of Convex Functions of Several Variables  When proving the continuity of a convex function of several variables, we already saw the complications for multi-dimensions. We do not intend to do a serious study of properties of convex functions of several variables, but only want to briefly discuss a few properties related to the notion of supporting planes to illustrate how the notion of compactness comes into play.  Supporting Hyperplane of a Convex Set   Let be a convex set, be a point on the boundary of . is said to have a supporting hyperplane at if there exists a vector such that     Supporting Hyperplane of a Convex Function   Let be a convex set and be a convex function defined on . Let . The graph of at is said to have a supporting hyperplane if there exists a non-zero vector such that     Note that we use the same terminology in these two contexts, but they have a slight distinction, as illustrated by the simple example on . As a function it does not have a supporting hyperplane (a straight line here) at , but its epigraph has a supporting hyperplane at (a vertical line).  For a convex function of a single variable we gave a proof of the existence of a supporting line at any interior point using the property of secant lines. We can apply this argument along any direction to a convex function of several variables, but it alone would not give us a supporting hyperplane at a point on the graph. The extension to multi-dimensions would necessarily involve some kind of limiting argument and compactness. We will discuss the following theorems.  Existence of a Supporting Hyperplane of a Closed Convex Set   Any boundary point of a closed convex set has a supporting hyperplane.   Let be a boundary point of the closed convex set . Then there exists a sequence . Each also has a closest point . This is done either by the Bolzano-Weierstrass compactness theorem or the parallelogram law of the Euclidean norm and the completeness of . This law shows that if is such that then is a Cauchy sequence, therefore has a limit, and that limit is in .  Next we claim that This follows from considering Note that , and for , so for all . It follows that   Define . Then is a sequence of unit vectors, so there exists a subsequence, still denoted by itself, and a limiting unit vector such that . We also know that as For each fixed , dividing through both sides of by , and passing to the limit, we get which is the inequality defining a supporting hyperplane.  In summary, the idea is that, in the absence of a direct construction of a supporting plane at the given point, one finds a relatively easy way to construct a supporting plane at a nearby, but unspecified point, and one then takes a limiting process to obtain a supporting plane at the given point.   Existence of a Supporting Hyperplane of the Graph of a Convex Function at an Interior Point   Let be a convex function defined on the convex set . If in an interior point of , then the graph of has a supporting hyperplane at .    The epigraph is a convex set. Its closure is a closed convex set, and is on the boundary of . By the previous theorem, there exists a non-zero vector such that Since in an interior point of , we claim that . For, otherwise, we would have which would force .  Next we claim that . This is because for any , and the above inequality then forces . Now it follows that for any , applying the above inequality for implies that which demonstrates a supporting hyperplane to the graph of at .   It is possible to prove this theorem directly using the properties of a convex function, along the lines of proof for the one dimensional case. You should try to construct such a proof, at least for the two dimensional case.  The tangent plane of a convex function at a differentiable point is a supporting plane to the graph of the function. Furthermore, if the point is in the interior of the domain, then it is the unique supporting plane    If denotes the function, and denotes the gradient of at , it may be geometrically easier to consider , which is also convex.    We close this subsection by discussing a more subtle application of convex\/concave functions in an optimization problem.  Using concavity to identify the minimum of under some constraints on   The constraints will be , .  We introduce the new variables , and reformulate the problem in terms of . The quotient then becomes and the constraints become   Our argument will be based on the following observation.      is a concave function in the first quadrant.  For any in the rectangle , there exists unique with , such that   In the set up above, we have with equality iff equals , or , equivalently, , or .     For the second item, note that for any in the rectangle , there exists a unique , such that lies on the diagonal from to , which implies the existence of a unique such that This then implies our desired relation.  We remark that in proving the last item above, only the (strict) concavity of along the diagonal from to is used. It is this last item that makes it possible to bound from below.  Now for each , we find according to the second item above then we can bound the quotient as Setting , , and after dividing both the numerator and denominator of the quotient on the right hand above by , it becomes and now the task is to find the infimum of this quotient when , and identify when equality can occur. This calculus problem can be solved in a routine way, and the answer is .   "
},
{
  "id": "ch-differentiaion-11-3-3",
  "level": "2",
  "url": "ch-differentiaion-11.html#ch-differentiaion-11-3-3",
  "type": "Definition",
  "number": "5.8.1",
  "title": "Convex set.",
  "body": "Convex set   A set in is called convex, if for any and any , we have .  "
},
{
  "id": "ch-differentiaion-11-3-5",
  "level": "2",
  "url": "ch-differentiaion-11.html#ch-differentiaion-11-3-5",
  "type": "Definition",
  "number": "5.8.2",
  "title": "Convex Function.",
  "body": "Convex Function   A real-valued function defined on a convex set is called convex, if for any and any , we have   is called strictly convex if we have the strict inequality   is called concave if is convex. Equivalently, the defining inequality above is reversed for a concave function.   "
},
{
  "id": "ch-differentiaion-11-3-7",
  "level": "2",
  "url": "ch-differentiaion-11.html#ch-differentiaion-11-3-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "epigraph sub level set "
},
{
  "id": "ch-differentiaion-11-3-8",
  "level": "2",
  "url": "ch-differentiaion-11.html#ch-differentiaion-11-3-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "supporting hyperplane "
},
{
  "id": "ch-differentiaion-11-4-4",
  "level": "2",
  "url": "ch-differentiaion-11.html#ch-differentiaion-11-4-4",
  "type": "Question",
  "number": "5.8.3",
  "title": "How can we extend this argument to higher dimensions?",
  "body": "How can we extend this argument to higher dimensions?  A convex function is certainly continuous at an interior point when constrained along any one-dimensional lines, but there are infinitely many lines through any given point. Here we will see some ideas of compactness at play.   We will assume that the origin is in the interior of the domain of ; in fact, we will assume the domain of includes the unit ball centered at the origin, and describe ideas to prove the continuity of at the origin.  On key idea is that there exist a finite number of points on the unit sphere , in fact points, such that any with sufficiently small can be written as , where are among the points on the unit sphere. Technically where . If we set , and when , , and , , then we get . The condition is satisfied when for, by the Cauchy-Schwarz inequality   It then follows that where is chosen so that for all . This implies that We can certainly cover by a finite number of similarly constructed sets, and carry out this argument, which would allow us to prove that   To prove , we use the property of the secant lines as done in the one-dimensional case. For any such that . We bound from below by the secant line through : Since the slope has a lower bound due to the upper bound of , this allows us to conclude that .   "
},
{
  "id": "ch-differentiaion-11-4-5",
  "level": "2",
  "url": "ch-differentiaion-11.html#ch-differentiaion-11-4-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "left derivative right derivative support function "
},
{
  "id": "ch-differentiaion-11-4-7",
  "level": "2",
  "url": "ch-differentiaion-11.html#ch-differentiaion-11-4-7",
  "type": "Theorem",
  "number": "5.8.4",
  "title": "Jensen’s inequality.",
  "body": "Jensen's inequality   Suppose that and is a density function on , namely, . Suppose that is convex, then In words, evaluated at the average of is not more than the average of .     Set . It is easy to rule out the possibility that or , so we may assume that . Using the support property of at , there exists some such that Substituting by , multiplying the above inequality by and integrating over , we get The right hand side is simply , which proves the Jensen's inequality.   "
},
{
  "id": "ch-differentiaion-11-4-9",
  "level": "2",
  "url": "ch-differentiaion-11.html#ch-differentiaion-11-4-9",
  "type": "Exercise",
  "number": "5.8.5",
  "title": ".",
  "body": "  Prove that for   "
},
{
  "id": "ch-differentiaion-11-5-3",
  "level": "2",
  "url": "ch-differentiaion-11.html#ch-differentiaion-11-5-3",
  "type": "Definition",
  "number": "5.8.6",
  "title": "Supporting Hyperplane of a Convex Set.",
  "body": "Supporting Hyperplane of a Convex Set   Let be a convex set, be a point on the boundary of . is said to have a supporting hyperplane at if there exists a vector such that    "
},
{
  "id": "ch-differentiaion-11-5-4",
  "level": "2",
  "url": "ch-differentiaion-11.html#ch-differentiaion-11-5-4",
  "type": "Definition",
  "number": "5.8.7",
  "title": "Supporting Hyperplane of a Convex Function.",
  "body": "Supporting Hyperplane of a Convex Function   Let be a convex set and be a convex function defined on . Let . The graph of at is said to have a supporting hyperplane if there exists a non-zero vector such that    "
},
{
  "id": "ch-differentiaion-11-5-7",
  "level": "2",
  "url": "ch-differentiaion-11.html#ch-differentiaion-11-5-7",
  "type": "Theorem",
  "number": "5.8.8",
  "title": "Existence of a Supporting Hyperplane of a Closed Convex Set.",
  "body": "Existence of a Supporting Hyperplane of a Closed Convex Set   Any boundary point of a closed convex set has a supporting hyperplane.   Let be a boundary point of the closed convex set . Then there exists a sequence . Each also has a closest point . This is done either by the Bolzano-Weierstrass compactness theorem or the parallelogram law of the Euclidean norm and the completeness of . This law shows that if is such that then is a Cauchy sequence, therefore has a limit, and that limit is in .  Next we claim that This follows from considering Note that , and for , so for all . It follows that   Define . Then is a sequence of unit vectors, so there exists a subsequence, still denoted by itself, and a limiting unit vector such that . We also know that as For each fixed , dividing through both sides of by , and passing to the limit, we get which is the inequality defining a supporting hyperplane.  In summary, the idea is that, in the absence of a direct construction of a supporting plane at the given point, one finds a relatively easy way to construct a supporting plane at a nearby, but unspecified point, and one then takes a limiting process to obtain a supporting plane at the given point.  "
},
{
  "id": "ch-differentiaion-11-5-8",
  "level": "2",
  "url": "ch-differentiaion-11.html#ch-differentiaion-11-5-8",
  "type": "Theorem",
  "number": "5.8.9",
  "title": "Existence of a Supporting Hyperplane of the Graph of a Convex Function at an Interior Point.",
  "body": "Existence of a Supporting Hyperplane of the Graph of a Convex Function at an Interior Point   Let be a convex function defined on the convex set . If in an interior point of , then the graph of has a supporting hyperplane at .    The epigraph is a convex set. Its closure is a closed convex set, and is on the boundary of . By the previous theorem, there exists a non-zero vector such that Since in an interior point of , we claim that . For, otherwise, we would have which would force .  Next we claim that . This is because for any , and the above inequality then forces . Now it follows that for any , applying the above inequality for implies that which demonstrates a supporting hyperplane to the graph of at .  "
},
{
  "id": "ch-differentiaion-11-5-10",
  "level": "2",
  "url": "ch-differentiaion-11.html#ch-differentiaion-11-5-10",
  "type": "Exercise",
  "number": "5.8.10",
  "title": "",
  "body": "The tangent plane of a convex function at a differentiable point is a supporting plane to the graph of the function. Furthermore, if the point is in the interior of the domain, then it is the unique supporting plane    If denotes the function, and denotes the gradient of at , it may be geometrically easier to consider , which is also convex.   "
},
{
  "id": "ch-differentiaion-11-5-12",
  "level": "2",
  "url": "ch-differentiaion-11.html#ch-differentiaion-11-5-12",
  "type": "Example",
  "number": "5.8.11",
  "title": "",
  "body": "Using concavity to identify the minimum of under some constraints on   The constraints will be , .  We introduce the new variables , and reformulate the problem in terms of . The quotient then becomes and the constraints become   Our argument will be based on the following observation.      is a concave function in the first quadrant.  For any in the rectangle , there exists unique with , such that   In the set up above, we have with equality iff equals , or , equivalently, , or .     For the second item, note that for any in the rectangle , there exists a unique , such that lies on the diagonal from to , which implies the existence of a unique such that This then implies our desired relation.  We remark that in proving the last item above, only the (strict) concavity of along the diagonal from to is used. It is this last item that makes it possible to bound from below.  Now for each , we find according to the second item above then we can bound the quotient as Setting , , and after dividing both the numerator and denominator of the quotient on the right hand above by , it becomes and now the task is to find the infimum of this quotient when , and identify when equality can occur. This calculus problem can be solved in a routine way, and the answer is .  "
},
{
  "id": "ch-differentiaion-12",
  "level": "1",
  "url": "ch-differentiaion-12.html",
  "type": "Exercises",
  "number": "5.9",
  "title": "Exercises",
  "body": " Exercises  Suppose that is an matrix with rank , and that .  Prove that there exists some such that for all .  Prove that there exists some such that any matrix satisfying also has rank .      Suppose that is differentiable at and takes values in with , and that has rank .  Prove that there exist some and such that for all such that .   Prove that there exists some such that for all , the open ball of radius centered at , is attained at some , and that    is a tangent vector to the image of at , so the above statement shows that is closest to among and is orthogonal to all tangents to the image of at .   In the set up above, assume furthermore that is continuous in , then prove that can be adjusted so that has rank for all . Assume in addition that . Prove that in the above and above can be adjusted so that such an is unique in .      Verify that the function is a differentiable function, where is the space of matrices. Then determine its derivative and check whether it is invertible in the case of and respectively.  Show that there exist neighborhoods of such that has an inverse which is differentiable, namely, any matrix in has a uniquely defined square root in . Can one do the same around ?    It may not be practical to work out the Jacobian matrix in the usual matrix form, but it suffices to obtain a linear function of such that as .    Consider the th Fourier series partial sum of as a linear map from to itself. Using the integral expression for to show that its operator norm is .     Prove a lower bound of when are subject to positive upper and lower bounds. This problem is from #93 in Part II, Chapter 2 of Polya and Szeg's classic Problems and Theorems in Analysis I   Let be positive numbers such that . If the two functions and are integrable over the interval , and on the interval. Then    "
},
{
  "id": "ch-differentiaion-12-2",
  "level": "2",
  "url": "ch-differentiaion-12.html#ch-differentiaion-12-2",
  "type": "Exercise",
  "number": "5.9.1",
  "title": "",
  "body": "Suppose that is an matrix with rank , and that .  Prove that there exists some such that for all .  Prove that there exists some such that any matrix satisfying also has rank .     "
},
{
  "id": "ch-differentiaion-12-3",
  "level": "2",
  "url": "ch-differentiaion-12.html#ch-differentiaion-12-3",
  "type": "Exercise",
  "number": "5.9.2",
  "title": "",
  "body": "Suppose that is differentiable at and takes values in with , and that has rank .  Prove that there exist some and such that for all such that .   Prove that there exists some such that for all , the open ball of radius centered at , is attained at some , and that    is a tangent vector to the image of at , so the above statement shows that is closest to among and is orthogonal to all tangents to the image of at .   In the set up above, assume furthermore that is continuous in , then prove that can be adjusted so that has rank for all . Assume in addition that . Prove that in the above and above can be adjusted so that such an is unique in .     "
},
{
  "id": "ch-differentiaion-12-4",
  "level": "2",
  "url": "ch-differentiaion-12.html#ch-differentiaion-12-4",
  "type": "Exercise",
  "number": "5.9.3",
  "title": "",
  "body": "Verify that the function is a differentiable function, where is the space of matrices. Then determine its derivative and check whether it is invertible in the case of and respectively.  Show that there exist neighborhoods of such that has an inverse which is differentiable, namely, any matrix in has a uniquely defined square root in . Can one do the same around ?    It may not be practical to work out the Jacobian matrix in the usual matrix form, but it suffices to obtain a linear function of such that as .  "
},
{
  "id": "ch-differentiaion-12-5",
  "level": "2",
  "url": "ch-differentiaion-12.html#ch-differentiaion-12-5",
  "type": "Exercise",
  "number": "5.9.4",
  "title": "",
  "body": " Consider the th Fourier series partial sum of as a linear map from to itself. Using the integral expression for to show that its operator norm is .   "
},
{
  "id": "ch-differentiaion-12-6",
  "level": "2",
  "url": "ch-differentiaion-12.html#ch-differentiaion-12-6",
  "type": "Exercise",
  "number": "5.9.5",
  "title": "",
  "body": " Prove a lower bound of when are subject to positive upper and lower bounds. This problem is from #93 in Part II, Chapter 2 of Polya and Szeg's classic Problems and Theorems in Analysis I   Let be positive numbers such that . If the two functions and are integrable over the interval , and on the interval. Then   "
},
{
  "id": "section-int-def",
  "level": "1",
  "url": "section-int-def.html",
  "type": "Section",
  "number": "6.1",
  "title": "Basic Definitions and Properties for the Integral of a Scalar Function on a Multi-dimensional Rectangle",
  "body": " Basic Definitions and Properties for the Integral of a Scalar Function on a Multi-dimensional Rectangle  There is little difference between one and higher dimensions in the discussion of this and next section; differences will show when discussing evaluation of integrals and change of variables.   hypercube partition  hypercube -dimensional rectangle partition    A partition of a hypercube defined in terms of a collection of partitions of its constitutive factors    A set of the form , where for each , is called a hypercube in . We also informally call it an -dimensional rectangle (or rectangular box). We define its volume to be   When is allowed, and this equality holds for at least one , we call such an a degenerate hypercube (or informally a degenerate rectangle), and define its volume to be . A hypercube has faces, edges and vertices obtained when one or more of the variables is held as fixed at either or , which are degenerate hypercubes.  Suppose that is a partition of for . Then these partitions 's form a partition of in the following sense:  The cells of the partition consist of ;  The union of the cells of ;  The intersection of any two different cells of is either the empty set, or a degenerate rectangle; and   .  We may denote this partition by .  The partition size  of is defined as      Only the verification of the third and last property requires more than a few lines of argument. To prove (iii), note that a partition of in our definition is defined in terms of a collection of partitions for each constitutive factor. As a result, if the intersection of two rectangles in a partition of is non-empty, then for each , the constitutive factor for and respectively for must have non-empty intersection. This means that and either share one common end point or are identical. We can now conclude that if two rectangles in a partition of have non-empty intersection, then the intersection must be a degenerate hypercube.  For (iv), one easy way is to use an induction argument on , the dimension. is an -dimensional rectangle, and the partitions form a partition of . Suppose that are the subintervals of . In the summation , group according to its constitutive factor in the first variable: each has the form of for some and , thus we have By induction, we have It now follows that   One could allow more general choices of rectangles in a partition; it would just make it harder to bookkeep such rectangles, and our definition suffices for our purpose of defining the integral of a function.    integral of a scalar function Riemann sum  upper sum lower sum    The definition of the Riemann sum, upper sum, lower sum, and integral of a scalar function on a hypercube    Suppose that is a bounded real-valued function defined on the rectangle , a partition of , and a point is chosen for each sub rectangle of . We define the corresponding Riemann sum as   Define as the supremum, and respectively infimum, of on the rectangle . Then the upper sum  , and respectively the lower sum  , of on with respect to the partition is defined as     Note that We are interested in whether has a limit as which is independent of how is chosen. It is easier to study whether , and respectively , has a limit as .   refinement of a partition  A partition is called a refinement of partition if each is a refinement of .     An illustration of a common refinement of two given partitions generated with the help of Gemini    Note that if is a refinement of partition , then , and that Just as in one dimension, if are two partitions of , then there is a partition which is a refinement of both and , and there is an essentially canonical way of constructing such an by adjoining all the end points of the subintervals of the factors of .   upper integral, lower integral    upper integral and lower integral of a function on a set   Suppose that is a bounded function defined on the rectangle . Then its upper integral, and respectively lower integral, on is defined as , and respectively , where runs over all partitions of . The upper integral is denoted as , while the lower integral is denoted as .     Let denote the standard tertiary Cantor set on and denote its characteristic function which takes value on and elsewhere. Let be a partition of into intervals of equal length for some . Find and . Is there a positive lower bound of independent of ?    Basic Property of Upper and Lower Integral of a Bounded Real-valued Function Defined on a Rectangle  Suppose that is a bounded function defined on the rectangle . Then and Furthermore,     Let be two arbitrary partitions of , and be a refinement of both and . Then As a result, and   For any , first find a partition of such that Now take any partition of of small partition size (to be determined). Let be the canonical refinement of and . Then and there exists a number depending only on the partition such that in the sums and , all but at most terms may differ, as in the construction of , only those rectangles in the partition of whose projection into some variable contains a partition point corresponding to the projection of need to be refined, and the number of such sub intervals of the factors of that need to be refined in relation to has a bound that depends only on .  Note that if is such a rectangle, then after refinement in relation to , is the non-overlapping union , so , and with bounded above by . Thus It now follows that there exists some such that whenever we have proving that .  The proof of is done in a similar way.     Suppose that are bounded functions on the rectangle . Show that     Riemann integrable function    The Riemann integral of   A bounded real-valued function defined on a rectangle is called Riemann integrable , if there exists a real number such that in the sense that for any , there exists some that for any partition and choice of , as long as .  When such an exists, it is unique, and we denote it by .     Linearity of Integral   Suppose that are Riemann integrable on , and are constants, then is also Riemann integrable on , and     Let and . Then for any , there exists such that for any partition of , whenever , we have Then which shows the integrability of as well as .    Based on , a necessary condition that be Riemann integrable on is that This turns out to be also sufficient .   Riemann Integrability Criterion  A bounded real-valued function defined on the rectangle is Riemann integrable iff holds.   We only need to prove the if part. Suppose holds. Call the value on both sides . Our proof in essentially carries over to show that, for any , there exists some , such that for any partition of with , we have Then for any choice of , we have which shows that is Riemann integrable on .     Let  and .   is discontinuous everywhere on , is continuous on , but is discontinuous on , while is discontinuous everywhere on .  For any partition of in the variable, and . Thus , , and is not Riemann integrable on .  For any partition of in the variable, for all , and Thus , , and , , so we conclude that is Riemann integrable on , and .  For , we have for all , so , . As a result, , , so is not Riemann integrable on .    Let be such that . Define a Cantor set on by removing the middle portion of the remaining intervals at stage . Let denote its characteristic function. Is Riemann integrable on ?   "
},
{
  "id": "hypercube",
  "level": "2",
  "url": "section-int-def.html#hypercube",
  "type": "Definition",
  "number": "6.1.1",
  "title": "",
  "body": " hypercube partition  hypercube -dimensional rectangle partition    A partition of a hypercube defined in terms of a collection of partitions of its constitutive factors    A set of the form , where for each , is called a hypercube in . We also informally call it an -dimensional rectangle (or rectangular box). We define its volume to be   When is allowed, and this equality holds for at least one , we call such an a degenerate hypercube (or informally a degenerate rectangle), and define its volume to be . A hypercube has faces, edges and vertices obtained when one or more of the variables is held as fixed at either or , which are degenerate hypercubes.  Suppose that is a partition of for . Then these partitions 's form a partition of in the following sense:  The cells of the partition consist of ;  The union of the cells of ;  The intersection of any two different cells of is either the empty set, or a degenerate rectangle; and   .  We may denote this partition by .  The partition size  of is defined as    "
},
{
  "id": "section-int-def-4",
  "level": "2",
  "url": "section-int-def.html#section-int-def-4",
  "type": "Remark",
  "number": "6.1.2",
  "title": "",
  "body": " Only the verification of the third and last property requires more than a few lines of argument. To prove (iii), note that a partition of in our definition is defined in terms of a collection of partitions for each constitutive factor. As a result, if the intersection of two rectangles in a partition of is non-empty, then for each , the constitutive factor for and respectively for must have non-empty intersection. This means that and either share one common end point or are identical. We can now conclude that if two rectangles in a partition of have non-empty intersection, then the intersection must be a degenerate hypercube.  For (iv), one easy way is to use an induction argument on , the dimension. is an -dimensional rectangle, and the partitions form a partition of . Suppose that are the subintervals of . In the summation , group according to its constitutive factor in the first variable: each has the form of for some and , thus we have By induction, we have It now follows that   One could allow more general choices of rectangles in a partition; it would just make it harder to bookkeep such rectangles, and our definition suffices for our purpose of defining the integral of a function.  "
},
{
  "id": "def-integral-scalar",
  "level": "2",
  "url": "section-int-def.html#def-integral-scalar",
  "type": "Definition",
  "number": "6.1.3",
  "title": "",
  "body": " integral of a scalar function Riemann sum  upper sum lower sum    The definition of the Riemann sum, upper sum, lower sum, and integral of a scalar function on a hypercube    Suppose that is a bounded real-valued function defined on the rectangle , a partition of , and a point is chosen for each sub rectangle of . We define the corresponding Riemann sum as   Define as the supremum, and respectively infimum, of on the rectangle . Then the upper sum  , and respectively the lower sum  , of on with respect to the partition is defined as    "
},
{
  "id": "def-refinement-partition",
  "level": "2",
  "url": "section-int-def.html#def-refinement-partition",
  "type": "Definition",
  "number": "6.1.4",
  "title": "",
  "body": " refinement of a partition  A partition is called a refinement of partition if each is a refinement of .   "
},
{
  "id": "fig-partition-refinement",
  "level": "2",
  "url": "section-int-def.html#fig-partition-refinement",
  "type": "Figure",
  "number": "6.1.5",
  "title": "",
  "body": " An illustration of a common refinement of two given partitions generated with the help of Gemini   "
},
{
  "id": "def-upperlower-int-def",
  "level": "2",
  "url": "section-int-def.html#def-upperlower-int-def",
  "type": "Definition",
  "number": "6.1.6",
  "title": "",
  "body": " upper integral, lower integral    upper integral and lower integral of a function on a set   Suppose that is a bounded function defined on the rectangle . Then its upper integral, and respectively lower integral, on is defined as , and respectively , where runs over all partitions of . The upper integral is denoted as , while the lower integral is denoted as .   "
},
{
  "id": "section-int-def-11",
  "level": "2",
  "url": "section-int-def.html#section-int-def-11",
  "type": "Exercise",
  "number": "6.1.7",
  "title": "",
  "body": " Let denote the standard tertiary Cantor set on and denote its characteristic function which takes value on and elsewhere. Let be a partition of into intervals of equal length for some . Find and . Is there a positive lower bound of independent of ?  "
},
{
  "id": "propos-upperlower-int",
  "level": "2",
  "url": "section-int-def.html#propos-upperlower-int",
  "type": "Proposition",
  "number": "6.1.8",
  "title": "Basic Property of Upper and Lower Integral of a Bounded Real-valued Function Defined on a Rectangle.",
  "body": " Basic Property of Upper and Lower Integral of a Bounded Real-valued Function Defined on a Rectangle  Suppose that is a bounded function defined on the rectangle . Then and Furthermore,     Let be two arbitrary partitions of , and be a refinement of both and . Then As a result, and   For any , first find a partition of such that Now take any partition of of small partition size (to be determined). Let be the canonical refinement of and . Then and there exists a number depending only on the partition such that in the sums and , all but at most terms may differ, as in the construction of , only those rectangles in the partition of whose projection into some variable contains a partition point corresponding to the projection of need to be refined, and the number of such sub intervals of the factors of that need to be refined in relation to has a bound that depends only on .  Note that if is such a rectangle, then after refinement in relation to , is the non-overlapping union , so , and with bounded above by . Thus It now follows that there exists some such that whenever we have proving that .  The proof of is done in a similar way.   "
},
{
  "id": "section-int-def-13",
  "level": "2",
  "url": "section-int-def.html#section-int-def-13",
  "type": "Exercise",
  "number": "6.1.9",
  "title": "",
  "body": " Suppose that are bounded functions on the rectangle . Show that   "
},
{
  "id": "def-riemann-integrable",
  "level": "2",
  "url": "section-int-def.html#def-riemann-integrable",
  "type": "Definition",
  "number": "6.1.10",
  "title": "",
  "body": " Riemann integrable function    The Riemann integral of   A bounded real-valued function defined on a rectangle is called Riemann integrable , if there exists a real number such that in the sense that for any , there exists some that for any partition and choice of , as long as .  When such an exists, it is unique, and we denote it by .   "
},
{
  "id": "thm-int-linear",
  "level": "2",
  "url": "section-int-def.html#thm-int-linear",
  "type": "Theorem",
  "number": "6.1.11",
  "title": "Linearity of Integral.",
  "body": " Linearity of Integral   Suppose that are Riemann integrable on , and are constants, then is also Riemann integrable on , and     Let and . Then for any , there exists such that for any partition of , whenever , we have Then which shows the integrability of as well as .   "
},
{
  "id": "section-int-def-17",
  "level": "2",
  "url": "section-int-def.html#section-int-def-17",
  "type": "Theorem",
  "number": "6.1.12",
  "title": "Riemann Integrability Criterion.",
  "body": " Riemann Integrability Criterion  A bounded real-valued function defined on the rectangle is Riemann integrable iff holds.   We only need to prove the if part. Suppose holds. Call the value on both sides . Our proof in essentially carries over to show that, for any , there exists some , such that for any partition of with , we have Then for any choice of , we have which shows that is Riemann integrable on .   "
},
{
  "id": "section-int-def-18",
  "level": "2",
  "url": "section-int-def.html#section-int-def-18",
  "type": "Example",
  "number": "6.1.13",
  "title": "",
  "body": " Let  and .   is discontinuous everywhere on , is continuous on , but is discontinuous on , while is discontinuous everywhere on .  For any partition of in the variable, and . Thus , , and is not Riemann integrable on .  For any partition of in the variable, for all , and Thus , , and , , so we conclude that is Riemann integrable on , and .  For , we have for all , so , . As a result, , , so is not Riemann integrable on .  "
},
{
  "id": "ex-K",
  "level": "2",
  "url": "section-int-def.html#ex-K",
  "type": "Exercise",
  "number": "6.1.14",
  "title": "",
  "body": " Let be such that . Define a Cantor set on by removing the middle portion of the remaining intervals at stage . Let denote its characteristic function. Is Riemann integrable on ?  "
},
{
  "id": "section-int-criterioa",
  "level": "1",
  "url": "section-int-criterioa.html",
  "type": "Section",
  "number": "6.2",
  "title": "Further Riemann Integrability Criteria",
  "body": "Further Riemann Integrability Criteria  Riemann Integrability Criterion in terms of the Oscillation of the Integrand  To find a more easily checkable criterion for , we first make the following definition.   oscillation of a function    The oscillation of a function over a set . The oscillation of a function at a point .    Let be defined on . The oscillation of a function over the set is defined to be and is denoted as .  The oscillation of a function at a point is defined to be and is denoted as . Here is the open ball of radius centered at .    Note that, in the definition of , we could replace the open ball by closed ball or rectangles. Furthermore, , where denotes the open rectangle centered at with as its side length. This follows from the relation and .  Note also that is continuous at iff .  Is it true that for any there holds ?   Is the following statement true: if is in a rectangle , and , then ?   Upper Semi-continuity of  The function is upper semi-continuous. As a consequence, for any real number , the set is closed.    For any real number , if , then there exists some such that . For any , we observe that . Thus , proving that the latter is open.    Note that namely, is a countable union of of the closed sets .   Riemann Integrability Criterion in terms of the Oscillation of the Integrand   A bounded real-valued function defined on the rectangle is Riemann integrable iff   In particular, if is continuous on the closed rectangle , then is Riemann integrable on .    Suppose that is Riemann integrable on and that is given. Our proof of gives us a partition such that which implies that   Suppose that holds. Then and Since is arbitrary, it follows that , and is Riemann integrable on .  Finally, suppose that is continuous on the closed rectangle , then it is uniformly continuous on . For any given , there exists such that for any partition of with , we have for all . It then follows that proving the Riemann integrability of on .    Note that when is continuous on the closed rectangle , we achieve by constructing a partition of such that for all . We can also achieve if we can construct a partition of such that the sum of volume of those rectangles , for which , can be made smaller than , as the factors have a uniform upper bound for a given bounded function on . We will exploit some properties of for this.    Integrability of a real valued function in terms of the integrability of its positive and negative parts  Let denote the positive and negative parts of respectively. If is Riemann integrable on , is it true that and are also Riemann integrable on ? If both and are Riemann integrable on , is it true that is Riemann integrable on ?    Suppose that is Riemann integrable on . Prove that is Riemann integrable on . Is the converse true?    Define on by Show that is Riemann integrable on and .     Sets of Content and of Measure   Set of content , set of measure   A set is said to have content , if for any , there exists a finite cover of by rectangles such that   A set is said to have measure , if for any , there exists an at most countable cover of by rectangles such that     Set of measure using covers of open rectangles  Verify that in the definition of a set of measure , open rectangles can be used instead of closed rectangles. Watch out for places later on where this modification is needed.   Relation Between Sets of Content and Sets of Measure     A set of content must be bounded and a set of measure .  The closure of a set of content must be a set of content .  A countable union of sets of measure must be a set of measure .  A countable union of sets of content must be a set of measure .  A compact set of measure is also a set of content .      The first and second properties are obvious. For the third one, suppose , where each is a set of measure . For any , there exists an at most countable cover ( could be ) of such that . Then is an at most countable cover of , and proving that is a set of measure .  The fourth property is a direct consequence of the third property. For the last property, suppose is a compact set of measure . For we can choose a cover of by open rectangles such that . Using the compactness of , we can then select a finite sub cover which satisfies the desired property.     The rectangles in the finite cover in the definition of a set of content are allowed to have non-empty overlaps and are not necessarily the cells of a partition, but we have the following  Observation : If has content , then for any , there exists a partition of a rectangle containing such that   This can be seen by first finding a finite open cover of the closure of such that . Then for any , there exists some such that the open hypercube with side lengths and centered at is contained in . Considering the open cover of and using the compactness of , we find a finite cover . Let . Then and for any partition of a rectangle containing such that , if any rectangle of satisfies , then taking any , there exists some such that . This then implies that any point also lies in . Thus is a finite number of hypercubes in the partition that covers , and , therefore  then follows from this.  For a set of content , as a consequence of , we have This then implies that .    The effect of requiring a finite cover in defining a set of content vs a possibly countably infinite cover in defining a set of measure can be seen through the following examples.  The set of rationals in is a set of measure , but not a set of content ; its closure, , is not a set of measure . The set of integers is a closed set of measure , but not a set of content .     Show that if a set has content , then its boundary also has content .    Give an example of a closed set of measure which does not have content and an example of a bounded set of measure such that its boundary does not have measure .    Suppose that is an increasing function on . Show that the set of points where is discontinuous has measure .   Does the Cantor set in have content ?     Riemann Integrability in terms of the Set of Discontinuity of the Integrand  We are now ready to formulate the following theorem.   Riemann Integrability in terms of the Set of Discontinuity of the Integrand   A bounded function on a bounded closed rectangle is Riemann integrable on iff its set of discontinuity has measure .    We will use for the only if part.  Suppose that is Riemann integrable on . For each , we will prove that is a set of content .  Given any . There exists a partition of such that The rectangles in are divided into two subgroups: the subgroup consisting those such that , and the subgroup consisting those such that . Then it follows from that   We now claim that This will show that is a set of content .  If the claim were not true, there would exist some . Thus must lie entirely in the union of the rectangles in . Because is a finite partition, is a closed set. Its complement is open, so there exists some ball completely disjoint from all rectangles in .  Let be the finite collection of rectangles in that actually contain the point . Since does not belong to any other rectangle in the partition, there exists a sufficiently small radius such that the ball only intersects . Thus, .  Because for each , we know that . Let . We strictly have .  Now, choose any arbitrary point . By our construction, must belong to at least one of these rectangles, say . Because both and belong to , we have: Therefore, for any two points , we can use the triangle inequality through the anchor point : Taking the supremum over all , we find the oscillation of on the ball: By definition, , which implies . This strictly contradicts the assumption that . Thus, our claim holds, and is a set of content .  For the if part, assume that the set of discontinuities of has measure . Since is bounded on , there exists such that for all . Given any , we want to find a partition of such that the difference between the upper and lower Darboux sums is less than .  Let . Consider the set . Because and has measure , also has measure . Furthermore, since the oscillation function is upper semi-continuous, is closed. Being a closed subset of a bounded rectangle , is compact. A compact set of measure has content , so we can cover with a finite collection of open rectangles such that the sum of their volumes is less than .  For every point , we have . By the definition of oscillation at a point, there exists an open rectangle containing such that . The collection forms an open cover of the compact set . Therefore, it has a finite subcover, say .  We can form a partition of by extending the faces of all the rectangles in this finite subcover. For each subrectangle , is either entirely contained in some , or it is not. We divide the subrectangles of into two groups: , containing those subrectangles that intersect (and thus must be covered by the union of ), and , containing the remaining subrectangles which are entirely contained within some .  For any , the oscillation . Since these subrectangles are covered by the rectangles , the sum of their volumes is bounded by . Thus, For any , is contained within some , meaning . Thus,   Summing these two parts over our partition , we find: This satisfies the Riemann integrability criterion. Thus, is Riemann integrable on , which completes the proof.      The product of two Riemann integrable functions is Riemann integrable  Let be two Riemann integrable functions on . Prove that their product is Riemann integrable on .   Is the characteristic function of the Cantor set in Riemann integrable? What about the characteristic function of the complement of this Cantor set? ---Note that this complement is an open set of . Work out the upper and lower integrals of either of these functions.     "
},
{
  "id": "def-osc",
  "level": "2",
  "url": "section-int-criterioa.html#def-osc",
  "type": "Definition",
  "number": "6.2.1",
  "title": "",
  "body": " oscillation of a function    The oscillation of a function over a set . The oscillation of a function at a point .    Let be defined on . The oscillation of a function over the set is defined to be and is denoted as .  The oscillation of a function at a point is defined to be and is denoted as . Here is the open ball of radius centered at .   "
},
{
  "id": "section-int-criterioa-2-6",
  "level": "2",
  "url": "section-int-criterioa.html#section-int-criterioa-2-6",
  "type": "Exercise",
  "number": "6.2.2",
  "title": "",
  "body": "Is it true that for any there holds ?  "
},
{
  "id": "section-int-criterioa-2-7",
  "level": "2",
  "url": "section-int-criterioa.html#section-int-criterioa-2-7",
  "type": "Exercise",
  "number": "6.2.3",
  "title": "",
  "body": "Is the following statement true: if is in a rectangle , and , then ?  "
},
{
  "id": "section-int-criterioa-2-8",
  "level": "2",
  "url": "section-int-criterioa.html#section-int-criterioa-2-8",
  "type": "Proposition",
  "number": "6.2.4",
  "title": "Upper Semi-continuity of <span class=\"process-math\">\\(\\osc(f)(\\bx)\\)<\/span>.",
  "body": "Upper Semi-continuity of  The function is upper semi-continuous. As a consequence, for any real number , the set is closed.    For any real number , if , then there exists some such that . For any , we observe that . Thus , proving that the latter is open.   "
},
{
  "id": "thm-Riemann-integrability-oscillation",
  "level": "2",
  "url": "section-int-criterioa.html#thm-Riemann-integrability-oscillation",
  "type": "Theorem",
  "number": "6.2.5",
  "title": "Riemann Integrability Criterion in terms of the Oscillation of the Integrand.",
  "body": " Riemann Integrability Criterion in terms of the Oscillation of the Integrand   A bounded real-valued function defined on the rectangle is Riemann integrable iff   In particular, if is continuous on the closed rectangle , then is Riemann integrable on .    Suppose that is Riemann integrable on and that is given. Our proof of gives us a partition such that which implies that   Suppose that holds. Then and Since is arbitrary, it follows that , and is Riemann integrable on .  Finally, suppose that is continuous on the closed rectangle , then it is uniformly continuous on . For any given , there exists such that for any partition of with , we have for all . It then follows that proving the Riemann integrability of on .   "
},
{
  "id": "section-int-criterioa-2-12-1",
  "level": "2",
  "url": "section-int-criterioa.html#section-int-criterioa-2-12-1",
  "type": "Exercise",
  "number": "6.2.1.1",
  "title": "Integrability of a real valued function in terms of the integrability of its positive and negative parts.",
  "body": " Integrability of a real valued function in terms of the integrability of its positive and negative parts  Let denote the positive and negative parts of respectively. If is Riemann integrable on , is it true that and are also Riemann integrable on ? If both and are Riemann integrable on , is it true that is Riemann integrable on ?  "
},
{
  "id": "section-int-criterioa-2-12-2",
  "level": "2",
  "url": "section-int-criterioa.html#section-int-criterioa-2-12-2",
  "type": "Exercise",
  "number": "6.2.1.2",
  "title": "",
  "body": " Suppose that is Riemann integrable on . Prove that is Riemann integrable on . Is the converse true?  "
},
{
  "id": "section-int-criterioa-2-12-3",
  "level": "2",
  "url": "section-int-criterioa.html#section-int-criterioa-2-12-3",
  "type": "Exercise",
  "number": "6.2.1.3",
  "title": "",
  "body": " Define on by Show that is Riemann integrable on and .  "
},
{
  "id": "def-content0-measure0",
  "level": "2",
  "url": "section-int-criterioa.html#def-content0-measure0",
  "type": "Definition",
  "number": "6.2.6",
  "title": "",
  "body": " Set of content , set of measure   A set is said to have content , if for any , there exists a finite cover of by rectangles such that   A set is said to have measure , if for any , there exists an at most countable cover of by rectangles such that    "
},
{
  "id": "section-int-criterioa-3-3",
  "level": "2",
  "url": "section-int-criterioa.html#section-int-criterioa-3-3",
  "type": "Exercise",
  "number": "6.2.7",
  "title": "Set of measure <span class=\"process-math\">\\(0\\)<\/span> using covers of open rectangles.",
  "body": "Set of measure using covers of open rectangles  Verify that in the definition of a set of measure , open rectangles can be used instead of closed rectangles. Watch out for places later on where this modification is needed.  "
},
{
  "id": "section-int-criterioa-3-4",
  "level": "2",
  "url": "section-int-criterioa.html#section-int-criterioa-3-4",
  "type": "Proposition",
  "number": "6.2.8",
  "title": "Relation Between Sets of Content <span class=\"process-math\">\\(0\\)<\/span> and Sets of Measure <span class=\"process-math\">\\(0\\)<\/span>.",
  "body": "Relation Between Sets of Content and Sets of Measure     A set of content must be bounded and a set of measure .  The closure of a set of content must be a set of content .  A countable union of sets of measure must be a set of measure .  A countable union of sets of content must be a set of measure .  A compact set of measure is also a set of content .      The first and second properties are obvious. For the third one, suppose , where each is a set of measure . For any , there exists an at most countable cover ( could be ) of such that . Then is an at most countable cover of , and proving that is a set of measure .  The fourth property is a direct consequence of the third property. For the last property, suppose is a compact set of measure . For we can choose a cover of by open rectangles such that . Using the compactness of , we can then select a finite sub cover which satisfies the desired property.   "
},
{
  "id": "section-int-criterioa-3-5",
  "level": "2",
  "url": "section-int-criterioa.html#section-int-criterioa-3-5",
  "type": "Remark",
  "number": "6.2.9",
  "title": "",
  "body": " The rectangles in the finite cover in the definition of a set of content are allowed to have non-empty overlaps and are not necessarily the cells of a partition, but we have the following  Observation : If has content , then for any , there exists a partition of a rectangle containing such that   This can be seen by first finding a finite open cover of the closure of such that . Then for any , there exists some such that the open hypercube with side lengths and centered at is contained in . Considering the open cover of and using the compactness of , we find a finite cover . Let . Then and for any partition of a rectangle containing such that , if any rectangle of satisfies , then taking any , there exists some such that . This then implies that any point also lies in . Thus is a finite number of hypercubes in the partition that covers , and , therefore  then follows from this.  For a set of content , as a consequence of , we have This then implies that .  "
},
{
  "id": "section-int-criterioa-3-6",
  "level": "2",
  "url": "section-int-criterioa.html#section-int-criterioa-3-6",
  "type": "Remark",
  "number": "6.2.10",
  "title": "",
  "body": " The effect of requiring a finite cover in defining a set of content vs a possibly countably infinite cover in defining a set of measure can be seen through the following examples.  The set of rationals in is a set of measure , but not a set of content ; its closure, , is not a set of measure . The set of integers is a closed set of measure , but not a set of content .  "
},
{
  "id": "section-int-criterioa-3-7-1",
  "level": "2",
  "url": "section-int-criterioa.html#section-int-criterioa-3-7-1",
  "type": "Exercise",
  "number": "6.2.2.1",
  "title": "",
  "body": " Show that if a set has content , then its boundary also has content .  "
},
{
  "id": "section-int-criterioa-3-7-2",
  "level": "2",
  "url": "section-int-criterioa.html#section-int-criterioa-3-7-2",
  "type": "Exercise",
  "number": "6.2.2.2",
  "title": "",
  "body": " Give an example of a closed set of measure which does not have content and an example of a bounded set of measure such that its boundary does not have measure .  "
},
{
  "id": "section-int-criterioa-3-7-3",
  "level": "2",
  "url": "section-int-criterioa.html#section-int-criterioa-3-7-3",
  "type": "Exercise",
  "number": "6.2.2.3",
  "title": "",
  "body": " Suppose that is an increasing function on . Show that the set of points where is discontinuous has measure .  "
},
{
  "id": "section-int-criterioa-3-7-4",
  "level": "2",
  "url": "section-int-criterioa.html#section-int-criterioa-3-7-4",
  "type": "Exercise",
  "number": "6.2.2.4",
  "title": "",
  "body": "Does the Cantor set in have content ?  "
},
{
  "id": "thm-integrability-osc0",
  "level": "2",
  "url": "section-int-criterioa.html#thm-integrability-osc0",
  "type": "Theorem",
  "number": "6.2.11",
  "title": "Riemann Integrability in terms of the Set of Discontinuity of the Integrand.",
  "body": " Riemann Integrability in terms of the Set of Discontinuity of the Integrand   A bounded function on a bounded closed rectangle is Riemann integrable on iff its set of discontinuity has measure .    We will use for the only if part.  Suppose that is Riemann integrable on . For each , we will prove that is a set of content .  Given any . There exists a partition of such that The rectangles in are divided into two subgroups: the subgroup consisting those such that , and the subgroup consisting those such that . Then it follows from that   We now claim that This will show that is a set of content .  If the claim were not true, there would exist some . Thus must lie entirely in the union of the rectangles in . Because is a finite partition, is a closed set. Its complement is open, so there exists some ball completely disjoint from all rectangles in .  Let be the finite collection of rectangles in that actually contain the point . Since does not belong to any other rectangle in the partition, there exists a sufficiently small radius such that the ball only intersects . Thus, .  Because for each , we know that . Let . We strictly have .  Now, choose any arbitrary point . By our construction, must belong to at least one of these rectangles, say . Because both and belong to , we have: Therefore, for any two points , we can use the triangle inequality through the anchor point : Taking the supremum over all , we find the oscillation of on the ball: By definition, , which implies . This strictly contradicts the assumption that . Thus, our claim holds, and is a set of content .  For the if part, assume that the set of discontinuities of has measure . Since is bounded on , there exists such that for all . Given any , we want to find a partition of such that the difference between the upper and lower Darboux sums is less than .  Let . Consider the set . Because and has measure , also has measure . Furthermore, since the oscillation function is upper semi-continuous, is closed. Being a closed subset of a bounded rectangle , is compact. A compact set of measure has content , so we can cover with a finite collection of open rectangles such that the sum of their volumes is less than .  For every point , we have . By the definition of oscillation at a point, there exists an open rectangle containing such that . The collection forms an open cover of the compact set . Therefore, it has a finite subcover, say .  We can form a partition of by extending the faces of all the rectangles in this finite subcover. For each subrectangle , is either entirely contained in some , or it is not. We divide the subrectangles of into two groups: , containing those subrectangles that intersect (and thus must be covered by the union of ), and , containing the remaining subrectangles which are entirely contained within some .  For any , the oscillation . Since these subrectangles are covered by the rectangles , the sum of their volumes is bounded by . Thus, For any , is contained within some , meaning . Thus,   Summing these two parts over our partition , we find: This satisfies the Riemann integrability criterion. Thus, is Riemann integrable on , which completes the proof.   "
},
{
  "id": "section-int-criterioa-4-4-1",
  "level": "2",
  "url": "section-int-criterioa.html#section-int-criterioa-4-4-1",
  "type": "Exercise",
  "number": "6.2.3.1",
  "title": "The product of two Riemann integrable functions is Riemann integrable.",
  "body": " The product of two Riemann integrable functions is Riemann integrable  Let be two Riemann integrable functions on . Prove that their product is Riemann integrable on .  "
},
{
  "id": "section-int-criterioa-4-4-2",
  "level": "2",
  "url": "section-int-criterioa.html#section-int-criterioa-4-4-2",
  "type": "Exercise",
  "number": "6.2.3.2",
  "title": "",
  "body": "Is the characteristic function of the Cantor set in Riemann integrable? What about the characteristic function of the complement of this Cantor set? ---Note that this complement is an open set of . Work out the upper and lower integrals of either of these functions.  "
},
{
  "id": "ch-integration-5",
  "level": "1",
  "url": "ch-integration-5.html",
  "type": "Section",
  "number": "6.3",
  "title": "Fubini’s Theorem",
  "body": "Fubini's Theorem  An integral is rarely evaluated using the limit of Riemann sum. Fubini's Theorem gives a mechanism to evaluate the integral of a function defined on a rectangle using iterated integrals in one variable. When the integrand is a continuous function on a rectangle, both the statement and proof of the theorem is straightforward. For the general case of a Riemann integrable function on a rectangle, the formulation and proof require some modification.  Suppose that and are two rectangles in and respectively, and is a Riemann integrable function on . Then for any fixed , we can consider the integrability of the function for . We can also reverse the role between and . To indicate the difference of the integration with respect to the variables, we write   and when the integral exists. Likewise the upper and lower integrals make natural sense.  Fubini's Theorem for Continuous Functions  Suppose that and are two rectangles in and respectively, and is a continuous function on . Then is a continuous function of , and Likewise, is a continuous function of , and     The key property used here is the uniform continuity of on : both sides of and can be approximated by any Riemann sum with respect to a partition whose size is sufficiently small. More specifically, for any , there exists such that for any rectangle of and of whose side length is less than , we have  and It follows that for any partition of and of whenever ,  and Since is sandwiched between and , it follows that Likewise, is sandwiched between and , it follows that therefore for any sampling of points corresponding to we have Observe that is sandwiched between and , so It then follows that But is a Riemann sum of the integral only subject to , it follows that Since is arbitrary, it follows from that holds. can be proved in a similar way.      Verify that is sandwiched between and .    Verify . What's the reason by replacing by ?   To obtain a similar theorem for a general Riemann integrable function on , the main issue is that the integrability of on does not necessarily guarantee that the iterated integrals , and respectively , are defined for every , and respectively for every . One can see this through the simple example on  This fails to be Riemann integrable in for every . Yet, both and are well defined for every . It turns out that we can formulate and prove a Fubini theorem using either the upper or the lower integral as a replacement in the iterated integral.  Verify that the function above is Riemann integrable on . Also evaluate and for each and determine their integrability in .   Here is a typical application of the Fubini's Theorem.   Evaluate over the triangular region .  First the domain of integration is not a rectangle. We can treat this integral as the integral of over the square .  We can try to evaluate the integral via but the integral is not so easy to evaluate.  We then try to the alternate way of iterated integrals    Evaluate the integral , where .   Fubini's Theorem for Riemann Integrable Functions   Suppose that and are two rectangles in and respectively, and is a Riemann integrable function on . Then both and are Riemann integrable of , and Likewise, both and are Riemann integrable of , and     We will focus on the first equality in . It relies on the observation that the lower and upper sums of for any partition of and of are sandwiched between the lower sum and the upper sum , and these two sums approach when the partition size goes to zero. This follows by noting that and so Since it follows that proving that is Riemann integrable over with The rest of the equalities can be proved in a similar way.     A Riemann integrable function of is Riemann integrable in except perhaps for on a set of measure  In the setting of the above theorem, except perhaps on a set of measure of .    It follows from that Since for every , the conclusion follows from the following exercise.    Suppose that on and . Then except perhaps on a set of measure of .    Prove the rest of the equalities in .   "
},
{
  "id": "Fubini-cont",
  "level": "2",
  "url": "ch-integration-5.html#Fubini-cont",
  "type": "Theorem",
  "number": "6.3.1",
  "title": "Fubini’s Theorem for Continuous Functions.",
  "body": "Fubini's Theorem for Continuous Functions  Suppose that and are two rectangles in and respectively, and is a continuous function on . Then is a continuous function of , and Likewise, is a continuous function of , and     The key property used here is the uniform continuity of on : both sides of and can be approximated by any Riemann sum with respect to a partition whose size is sufficiently small. More specifically, for any , there exists such that for any rectangle of and of whose side length is less than , we have  and It follows that for any partition of and of whenever ,  and Since is sandwiched between and , it follows that Likewise, is sandwiched between and , it follows that therefore for any sampling of points corresponding to we have Observe that is sandwiched between and , so It then follows that But is a Riemann sum of the integral only subject to , it follows that Since is arbitrary, it follows from that holds. can be proved in a similar way.    "
},
{
  "id": "ch-integration-5-6",
  "level": "2",
  "url": "ch-integration-5.html#ch-integration-5-6",
  "type": "Exercise",
  "number": "6.3.2",
  "title": "",
  "body": " Verify that is sandwiched between and .  "
},
{
  "id": "ch-integration-5-7",
  "level": "2",
  "url": "ch-integration-5.html#ch-integration-5-7",
  "type": "Exercise",
  "number": "6.3.3",
  "title": "",
  "body": " Verify . What's the reason by replacing by ?  "
},
{
  "id": "ch-integration-5-9",
  "level": "2",
  "url": "ch-integration-5.html#ch-integration-5-9",
  "type": "Exercise",
  "number": "6.3.4",
  "title": "",
  "body": "Verify that the function above is Riemann integrable on . Also evaluate and for each and determine their integrability in .  "
},
{
  "id": "ch-integration-5-11",
  "level": "2",
  "url": "ch-integration-5.html#ch-integration-5-11",
  "type": "Example",
  "number": "6.3.5",
  "title": "",
  "body": " Evaluate over the triangular region .  First the domain of integration is not a rectangle. We can treat this integral as the integral of over the square .  We can try to evaluate the integral via but the integral is not so easy to evaluate.  We then try to the alternate way of iterated integrals   "
},
{
  "id": "ch-integration-5-12",
  "level": "2",
  "url": "ch-integration-5.html#ch-integration-5-12",
  "type": "Exercise",
  "number": "6.3.6",
  "title": "",
  "body": "Evaluate the integral , where .  "
},
{
  "id": "Fubini-gen",
  "level": "2",
  "url": "ch-integration-5.html#Fubini-gen",
  "type": "Theorem",
  "number": "6.3.7",
  "title": "Fubini’s Theorem for  Riemann Integrable Functions.",
  "body": "Fubini's Theorem for Riemann Integrable Functions   Suppose that and are two rectangles in and respectively, and is a Riemann integrable function on . Then both and are Riemann integrable of , and Likewise, both and are Riemann integrable of , and     We will focus on the first equality in . It relies on the observation that the lower and upper sums of for any partition of and of are sandwiched between the lower sum and the upper sum , and these two sums approach when the partition size goes to zero. This follows by noting that and so Since it follows that proving that is Riemann integrable over with The rest of the equalities can be proved in a similar way.   "
},
{
  "id": "ch-integration-5-14",
  "level": "2",
  "url": "ch-integration-5.html#ch-integration-5-14",
  "type": "Corollary",
  "number": "6.3.8",
  "title": "A Riemann integrable function <span class=\"process-math\">\\(f(\\bx, \\by)\\)<\/span> of <span class=\"process-math\">\\((\\bx, \\by)\\)<\/span> is Riemann integrable in <span class=\"process-math\">\\(\\by\\)<\/span> except  perhaps for <span class=\"process-math\">\\(\\bx\\)<\/span> on a set of measure <span class=\"process-math\">\\(0\\)<\/span>.",
  "body": " A Riemann integrable function of is Riemann integrable in except perhaps for on a set of measure  In the setting of the above theorem, except perhaps on a set of measure of .    It follows from that Since for every , the conclusion follows from the following exercise.   "
},
{
  "id": "ch-integration-5-15",
  "level": "2",
  "url": "ch-integration-5.html#ch-integration-5-15",
  "type": "Exercise",
  "number": "6.3.9",
  "title": "",
  "body": "Suppose that on and . Then except perhaps on a set of measure of .  "
},
{
  "id": "ch-integration-5-16",
  "level": "2",
  "url": "ch-integration-5.html#ch-integration-5-16",
  "type": "Exercise",
  "number": "6.3.10",
  "title": "",
  "body": " Prove the rest of the equalities in .  "
},
{
  "id": "ch-integration-6",
  "level": "1",
  "url": "ch-integration-6.html",
  "type": "Section",
  "number": "6.4",
  "title": "Integration on a Jordan Measurable Set",
  "body": "Integration on a Jordan Measurable Set  We extend the Riemann integration from a rectangular region to a more general region called Jordan measurable.   Jordan measurable  A bounded subset of is called Jordan measurable if its boundary has content .    Note that the characteristic function of is discontinuous precisely on , so if has content , then is Riemann integrable. Conversely, if is bounded and is Riemann integrable, then has measure . But is now a bounded closed set, so it has content , making Jordan measurable.  But this definition makes certain open sets not Jordan measurable, while it seems natural to define the length of any open set of to be , where is the canonical decomposition of an open set in as the non-overlapping union of open intervals .    Suppose that of is a Jordan measurable set and is a bounded function on . We say that is integrable on if is a Riemann integrable function (on a rectangular box containing ). In such a case, we call the integral of on and denote it as .     The above definition is legitimate due to the following property: if are two rectangles containing and is Riemann integrable in , then it is Riemann integrable in and .   Basic Properties of Jordan Measurable Sets and Riemann Integrable Functions   Suppose that and are Jordan measurable sets in . Then  , , and are Jordan-measurable.  If is Jordan-measurable and has measure , then any bounded function on is Riemann integrable on and .  If are Riemann integrable on , then for any constants , is Riemann integrable on and   If are Jordan-measurable and has measure , then       (a) follows by using , , and a similar one for .  When is Jordan-measurable and has measure , its interior must be empty so . Since has content , it follows that has content . Then, as in proving and , for any , can be covered by a finite number of open rectangles such that , so there exists some such that if any partition satisfies , then any rectangle of satisfying must satisfy . Therefore It further follows that , where is such that for all . Since in these inequalities, they show that is Riemann integrable with .    The most common domains of integration are built on the following kinds: is a Jordan-measurable set in , and for all are two continuous functions on , then the graph region is Jordan-measurable in .  If is a continuous function defined on , then Fubini's Theorem applied to would take the form of    "
},
{
  "id": "def-Jordan",
  "level": "2",
  "url": "ch-integration-6.html#def-Jordan",
  "type": "Definition",
  "number": "6.4.1",
  "title": "",
  "body": " Jordan measurable  A bounded subset of is called Jordan measurable if its boundary has content .   "
},
{
  "id": "ch-integration-6-4",
  "level": "2",
  "url": "ch-integration-6.html#ch-integration-6-4",
  "type": "Remark",
  "number": "6.4.2",
  "title": "",
  "body": "Note that the characteristic function of is discontinuous precisely on , so if has content , then is Riemann integrable. Conversely, if is bounded and is Riemann integrable, then has measure . But is now a bounded closed set, so it has content , making Jordan measurable.  But this definition makes certain open sets not Jordan measurable, while it seems natural to define the length of any open set of to be , where is the canonical decomposition of an open set in as the non-overlapping union of open intervals .  "
},
{
  "id": "def-RI-gen",
  "level": "2",
  "url": "ch-integration-6.html#def-RI-gen",
  "type": "Definition",
  "number": "6.4.3",
  "title": "",
  "body": " Suppose that of is a Jordan measurable set and is a bounded function on . We say that is integrable on if is a Riemann integrable function (on a rectangular box containing ). In such a case, we call the integral of on and denote it as .   "
},
{
  "id": "ch-integration-6-6",
  "level": "2",
  "url": "ch-integration-6.html#ch-integration-6-6",
  "type": "Remark",
  "number": "6.4.4",
  "title": "",
  "body": " The above definition is legitimate due to the following property: if are two rectangles containing and is Riemann integrable in , then it is Riemann integrable in and .  "
},
{
  "id": "ch-integration-6-7",
  "level": "2",
  "url": "ch-integration-6.html#ch-integration-6-7",
  "type": "Proposition",
  "number": "6.4.5",
  "title": "Basic Properties of Jordan Measurable Sets and Riemann Integrable Functions.",
  "body": "Basic Properties of Jordan Measurable Sets and Riemann Integrable Functions   Suppose that and are Jordan measurable sets in . Then  , , and are Jordan-measurable.  If is Jordan-measurable and has measure , then any bounded function on is Riemann integrable on and .  If are Riemann integrable on , then for any constants , is Riemann integrable on and   If are Jordan-measurable and has measure , then       (a) follows by using , , and a similar one for .  When is Jordan-measurable and has measure , its interior must be empty so . Since has content , it follows that has content . Then, as in proving and , for any , can be covered by a finite number of open rectangles such that , so there exists some such that if any partition satisfies , then any rectangle of satisfying must satisfy . Therefore It further follows that , where is such that for all . Since in these inequalities, they show that is Riemann integrable with .   "
},
{
  "id": "ch-integration-6-8",
  "level": "2",
  "url": "ch-integration-6.html#ch-integration-6-8",
  "type": "Remark",
  "number": "6.4.6",
  "title": "",
  "body": "The most common domains of integration are built on the following kinds: is a Jordan-measurable set in , and for all are two continuous functions on , then the graph region is Jordan-measurable in .  If is a continuous function defined on , then Fubini's Theorem applied to would take the form of   "
},
{
  "id": "ch-integration-7",
  "level": "1",
  "url": "ch-integration-7.html",
  "type": "Section",
  "number": "6.5",
  "title": "Determinant",
  "body": "Determinant  This section is a brief review of determinants from linear algebra in preparation for the change of variables formula of integrals. The determinant is a scalar valued function on the space of square matrices with the following properties:   for any identity matrix .  is a linear function of each of the column vectors of when the other columns are held fixed.  If is obtained from by interchanging two columns, then   If has two equal columns, then .  If is obtained from by adding a multiple of one column of to a different column, then .   for any two matrices .  In fact properties (d)-(f) follow from (a)-(c).  One can either produce a formula for in terms of the entries of and verify that it satisfies the above properties, or use these properties to prove such a value of the determinant is uniquely determined---this will give an algorithm for computing based on the above properties. It turns out that the above properties indeed determine the uniquely. Its formula can be found in any standard textbook on linear algebra, but is rarely used directly except for matrices.  These properties are rooted in the geometric origin in the determinant function.  Properties (a)-(e) encapsulate the properties of signed area (volume) of parallelograms (parallelepipeds) with edges formed using the column vectors of the matrix: property (e) is a reflection of the geometric property that parallelograms with equal base and equal heights have equal areas-the above operation corresponds to fixing an dimensional base and sliding the edge not in the base in the direction of a base edge, thus resulting in a newly formed parallelogram (parallelepiped) with the same base but equal height.  It may be appealing to have a formula to directly compute the geometric area (volume) of a parallelogram (parallelepiped). But such a formula would lose the linearity as in (b). We would rather keep (b), and this necessitates in allowing negative values in the determinant, so the geometric interpretation has to be signed area (volume), which is related to the orientation of the edges of the parallelogram (parallelepiped)-for a matrix, it reflects whether the relation between the first and second columns is counter-clockwise or clockwise rotation.  We can still use to represent the geometric area (volume) of a parallelogram (parallelepiped). It fails the linearity but still maintains the following three geometric properties.  If a multiple of one column of is added to another column to form , then .  If one column of is a linear combination of the rest of the columns of , then . The converse also holds.  If one column of is multiplied by a scalar to form a matrix , then .  An equivalent way of stating property (ii) is that iff the system has a non-zero solution.   Any linear map associated to a square matrix maps a region to its image . Although we have not discussed the notion of area (volume) of a general region, the notion is intuitively clear at least when is the non-overlapping union of rectangles (the interior of the rectangles are not allowed to overlap, but the edges are allowed to overlap). Then the ratio of the areas (volumes) of and is independent of , and equals . In other words, is the magnifying factor of area (volume) for as a map. The property is a reflection of this perspective.    The following is a Desmos graph illustration of areas of parallelograms with adjacent edges [u, v] and [u, v+pu].  "
},
{
  "id": "ch-integration-8",
  "level": "1",
  "url": "ch-integration-8.html",
  "type": "Section",
  "number": "6.6",
  "title": "Change of Variables in Multi-dimensional Integral",
  "body": "Change of Variables in Multi-dimensional Integral  The change of variables formula in multi-dimensional integral takes the following form: where the change of variables transformation is continuously differentiable in an open domain such that , and further conditions on will be spelled out later.  Although an appropriate formulation and proof for general domains of integration takes a lot of work, there is a fairly intuitive idea behind , and the heart of the matter is reflected in the case of , which gives the volume of , defined as    Here is a version of the change of variables formula.    Suppose that is an open set in and is continuously differentiable, Suppose that is any Jordan-measurable subset of such that its closure is in . Then for any function which is integrable on , holds.     The formulation of the above theorem implicitly assumes that is Jordan measurable. This, together with the following, are consequences of using the Inverse Function Theorem.     is an open set and there is a well defined inverse of on , which is continuously differentiable.  For any subset , .  maps any set of of measure zero to a set of measure zero.  maps any Jordan-measurable set of to a Jordan measurable set.    Recall that the volume of a set is defined as when the latter is well defined; this turns out to be equivalent to (a). has measure zero, and (b). , where are sub rectangles of a partition. (b) is simply a restatement of , noting that for any partition .    In the one-variable case, the change of variables transformation is not required to be a bijection, and we don't put in the absolute value sign around the Jabobian, as our conventional notation encodes the orientation: if , then where, in case is a bijection and , we have , which is consistent with     (of properties in ) We only provide some details for item (iii). We first construct a sequence of compact closed subsets of satisfying  . In fact we can take each to be a hypercube with compact closure in and further require that is contained in another hypercube with compact closure .  Let be a set of measure . Then is a set of measure and it suffices to prove that each is a set of measure .  Since is continuous on and is compact and convex, there exists a bound such that for all . This then implies that As a consequence, any hypercube in with all side lengths equal to is mapped by to , which is contained in a hypercube of side length no more than and .  For any , let be a finite or countable collection of hypercubes covering such that . We may assume that each ---if some of the original does not satisfy this, we can simply replace it by .   Claim : We can replace this collection, if necessary, by a collection of hypercubes , such that each is a hypercube with all side lengths equal and .  This is seen by working with each individual : suppose it is given by , then choose and such that By partitioning each axis into intervals of length , we find such that The hypercube contains with Finally we can make sure that each by working with a larger , if necessary, and that each is the union of a finite number of hypercubes of side length with non-overlapping interior, therefore is the sum of the volumes of these hypercubes. Collecting these hypercubes we get an at most countable collection such that , if we have chosen .  Back to our proof of item (iii) in . is contained in , and each is contained in a cube whose volume is , therefore we have . Since are fixed here and is arbitrary, this shows that has measure .    In the above argument we choose to work with nested hypercubes only to give us room in to modify the hypercubes in the cover of so that each is the non-overlapping union of a finite number of hypercubes of equal side lengths. Similar ideas can be used to prove the following lemma, which could have been used to simplify the above proof.   Any open set of is a countable union of non-overlapping hypercubes of equal side lengths.    (of ) The central idea in proving is that for any open subset with a compact closure and , there exists a such that for any sufficiently small cube in the sense that its side length are equal and no more than , we have where is any point in , but will be taken as the center of , and depends on such that   This is seen by the linear Taylor approximation of : where as long as for some which depends on , and . For any cube in with as center and side lengths equal and no more than , is a parallelepiped with volume .  We will use the Taylor expansion above to estimate the volume of . It's easier to decompose on , where is the linear map given by the matrix , and . Note that the Jacobian matrix of at equal to the identity. If we apply to the Taylor expansion above we get It follows that is contained in a hypercube with as center and side lengths equal to the side lengths of multiplied by . Furthermore, and . Thus   The approach here follows that in the article by J. Schwartz, The formula for change in variables in a multiple integral, Amer. Math. Monthly 61, (1954), 81--85.   The above estimate also holds for hypercubes whose ratios of side lengths are within , with a somewhat modified constant replacing and that constant still approaches as we will keep using in the estimate for such hypercubes.  For any closed rectangle and any , we can do fine enough partition of using hypercubes for which the above estimate holds for each . Here we didn't use to produce sub rectangles of with equal side lengths as we want to work with a finite number of sub rectangles in a partition.  It now follows that The summation above is a Riemann sum for the integral of on , so as the partition size tends to , we get Since is arbitrary, it follows that   And this argument works not only for rectangles, but for all Jordan-measurable set. In fact, for any Jordan-measurable set whose closure is in , and any non-negative function , integrable on ,   Here are some more details for proving . In defining , we may work with partitions in the -space such that any of its subrectangle that has non-empty intersection with must be contained in . Then where we have used when , and for , as well as forming a non-overlapping subset of . It follows that       Suppose that in is a set of measure zero. For any , there exists a countable union of non-overlapping hypercubes of equal side lengths covering such that .    (of ) First, since the set of discontinuity of is , where is the set of discontinuity of in , and has measure due to having measure , it follows that is integrable on .  It suffices to prove for the case with . For the general case, we split an integrable function as the difference of its positive and negative parts: .  We now can apply with on and as the integrand to obtain where we have used . This establishes for non-negative integrable functions.     In applications often we can't apply the change of variables formula directly as the assumptions may not be satisfied in the form as stated, and we need to apply some approximation procedure.  One of the most commonly used change of variables is that from rectangular coordinates to polar coordinates: The Jacobian of is . If , then fails to be injective on a portion of and is not quite the open disc   However, for any small, our Theorem is applicable on Thus for any function which is continuous over , Then using and we obtain   Just as in the one variable case, when is not necessarily continuous (or bounded), one can define improper integral. An examination of the limiting argument above shows that if is known to be continuous away from the origin, and for some and , we have then the improper integral is well defined and the change of variables formula above is still valid.   "
},
{
  "id": "thm-chofva",
  "level": "2",
  "url": "ch-integration-8.html#thm-chofva",
  "type": "Theorem",
  "number": "6.6.1",
  "title": "",
  "body": "  Suppose that is an open set in and is continuously differentiable, Suppose that is any Jordan-measurable subset of such that its closure is in . Then for any function which is integrable on , holds.   "
},
{
  "id": "Tprop",
  "level": "2",
  "url": "ch-integration-8.html#Tprop",
  "type": "Remark",
  "number": "6.6.2",
  "title": "",
  "body": " The formulation of the above theorem implicitly assumes that is Jordan measurable. This, together with the following, are consequences of using the Inverse Function Theorem.     is an open set and there is a well defined inverse of on , which is continuously differentiable.  For any subset , .  maps any set of of measure zero to a set of measure zero.  maps any Jordan-measurable set of to a Jordan measurable set.    Recall that the volume of a set is defined as when the latter is well defined; this turns out to be equivalent to (a). has measure zero, and (b). , where are sub rectangles of a partition. (b) is simply a restatement of , noting that for any partition .  "
},
{
  "id": "ch-integration-8-7",
  "level": "2",
  "url": "ch-integration-8.html#ch-integration-8-7",
  "type": "Remark",
  "number": "6.6.3",
  "title": "",
  "body": " In the one-variable case, the change of variables transformation is not required to be a bijection, and we don't put in the absolute value sign around the Jabobian, as our conventional notation encodes the orientation: if , then where, in case is a bijection and , we have , which is consistent with   "
},
{
  "id": "ch-integration-8-8",
  "level": "2",
  "url": "ch-integration-8.html#ch-integration-8-8",
  "type": "Proof",
  "number": "6.6.1",
  "title": "",
  "body": " (of properties in ) We only provide some details for item (iii). We first construct a sequence of compact closed subsets of satisfying  . In fact we can take each to be a hypercube with compact closure in and further require that is contained in another hypercube with compact closure .  Let be a set of measure . Then is a set of measure and it suffices to prove that each is a set of measure .  Since is continuous on and is compact and convex, there exists a bound such that for all . This then implies that As a consequence, any hypercube in with all side lengths equal to is mapped by to , which is contained in a hypercube of side length no more than and .  For any , let be a finite or countable collection of hypercubes covering such that . We may assume that each ---if some of the original does not satisfy this, we can simply replace it by .   Claim : We can replace this collection, if necessary, by a collection of hypercubes , such that each is a hypercube with all side lengths equal and .  This is seen by working with each individual : suppose it is given by , then choose and such that By partitioning each axis into intervals of length , we find such that The hypercube contains with Finally we can make sure that each by working with a larger , if necessary, and that each is the union of a finite number of hypercubes of side length with non-overlapping interior, therefore is the sum of the volumes of these hypercubes. Collecting these hypercubes we get an at most countable collection such that , if we have chosen .  Back to our proof of item (iii) in . is contained in , and each is contained in a cube whose volume is , therefore we have . Since are fixed here and is arbitrary, this shows that has measure .  "
},
{
  "id": "ch-integration-8-9",
  "level": "2",
  "url": "ch-integration-8.html#ch-integration-8-9",
  "type": "Remark",
  "number": "6.6.4",
  "title": "",
  "body": " In the above argument we choose to work with nested hypercubes only to give us room in to modify the hypercubes in the cover of so that each is the non-overlapping union of a finite number of hypercubes of equal side lengths. Similar ideas can be used to prove the following lemma, which could have been used to simplify the above proof.  "
},
{
  "id": "equal-length-cube",
  "level": "2",
  "url": "ch-integration-8.html#equal-length-cube",
  "type": "Lemma",
  "number": "6.6.5",
  "title": "",
  "body": "Any open set of is a countable union of non-overlapping hypercubes of equal side lengths.    (of ) The central idea in proving is that for any open subset with a compact closure and , there exists a such that for any sufficiently small cube in the sense that its side length are equal and no more than , we have where is any point in , but will be taken as the center of , and depends on such that   This is seen by the linear Taylor approximation of : where as long as for some which depends on , and . For any cube in with as center and side lengths equal and no more than , is a parallelepiped with volume .  We will use the Taylor expansion above to estimate the volume of . It's easier to decompose on , where is the linear map given by the matrix , and . Note that the Jacobian matrix of at equal to the identity. If we apply to the Taylor expansion above we get It follows that is contained in a hypercube with as center and side lengths equal to the side lengths of multiplied by . Furthermore, and . Thus   The approach here follows that in the article by J. Schwartz, The formula for change in variables in a multiple integral, Amer. Math. Monthly 61, (1954), 81--85.   The above estimate also holds for hypercubes whose ratios of side lengths are within , with a somewhat modified constant replacing and that constant still approaches as we will keep using in the estimate for such hypercubes.  For any closed rectangle and any , we can do fine enough partition of using hypercubes for which the above estimate holds for each . Here we didn't use to produce sub rectangles of with equal side lengths as we want to work with a finite number of sub rectangles in a partition.  It now follows that The summation above is a Riemann sum for the integral of on , so as the partition size tends to , we get Since is arbitrary, it follows that   And this argument works not only for rectangles, but for all Jordan-measurable set. In fact, for any Jordan-measurable set whose closure is in , and any non-negative function , integrable on ,   Here are some more details for proving . In defining , we may work with partitions in the -space such that any of its subrectangle that has non-empty intersection with must be contained in . Then where we have used when , and for , as well as forming a non-overlapping subset of . It follows that    "
},
{
  "id": "ch-integration-8-11",
  "level": "2",
  "url": "ch-integration-8.html#ch-integration-8-11",
  "type": "Corollary",
  "number": "6.6.6",
  "title": "",
  "body": "  Suppose that in is a set of measure zero. For any , there exists a countable union of non-overlapping hypercubes of equal side lengths covering such that .    (of ) First, since the set of discontinuity of is , where is the set of discontinuity of in , and has measure due to having measure , it follows that is integrable on .  It suffices to prove for the case with . For the general case, we split an integrable function as the difference of its positive and negative parts: .  We now can apply with on and as the integrand to obtain where we have used . This establishes for non-negative integrable functions.   "
},
{
  "id": "ch-integration-8-12",
  "level": "2",
  "url": "ch-integration-8.html#ch-integration-8-12",
  "type": "Remark",
  "number": "6.6.7",
  "title": "",
  "body": " In applications often we can't apply the change of variables formula directly as the assumptions may not be satisfied in the form as stated, and we need to apply some approximation procedure.  One of the most commonly used change of variables is that from rectangular coordinates to polar coordinates: The Jacobian of is . If , then fails to be injective on a portion of and is not quite the open disc   However, for any small, our Theorem is applicable on Thus for any function which is continuous over , Then using and we obtain   Just as in the one variable case, when is not necessarily continuous (or bounded), one can define improper integral. An examination of the limiting argument above shows that if is known to be continuous away from the origin, and for some and , we have then the improper integral is well defined and the change of variables formula above is still valid.  "
},
{
  "id": "ch-integration-9",
  "level": "1",
  "url": "ch-integration-9.html",
  "type": "Section",
  "number": "6.7",
  "title": "A Brief Discussion on the Integration of Functions on a Surface",
  "body": "A Brief Discussion on the Integration of Functions on a Surface  Examples of surfaces are easy to visualize, but the definition for a general surface is not easy, as there is no easy way to use a single parametric representation defined on a simple domain in the Euclidean space to represent a general surface. On the other hand, a local patch of a surface can always be represented by a single parametric map defined on a simple domain such as square or disc in the Euclidean space. Our focus will be on the study of such a local patch. But different parametric representations may represent the same surface patch, so we need to understand how the analytic and geometric properties of such a patch depend on the parametric representations.  The definition for the area of a surface and integral on a surface is even harder, as a general surface has no simple surface cells that have a natural and simple formula for their areas as rectangles do in a plane, so there is no easy way to define an integral on a surface directly using partitions of the surface.  We will use a parametric representation to define the area of a surface patch and verify that it is independent of the parametric representation used.  We will briefly discuss the integration of functions on a surface patch reducing it to the integration on a parametric cell.   Definition of an -dimensional Differentiable Surface in  It seems natural to define a two dimensional surface as the graph in some ( ) of a continuously differentiable function defined over a two dimensional region in the flat Euclidean plane . But a surface as simple as the round sphere can't be represented as the graph of a single differentiable function. This graph feature becomes possible if one only requires this property locally near each point and allows for possibly different coordinate planes depending on the point over which to view the surface patch near the point as a graph.  Definition of an -dimensional Differentiable Surface in   A subset of is called an -dimensional differentiable surface ( ), also called an -dimensional differentiable manifold , if for each point , there exists a neighborhood ( ) of in and a differentiable function defined in a neighborhood of the coordinate projection of to some -dimensional coordinate subspace , where, for simplicity of notation, we take , , and is open considered as a subset of , such that     The conceptual difficulty of the above definition is that the function and its domain are not necessarily known explicitly or easily found and are allowed to vary with the point chosen, although they are often guaranteed by .   Suppose that ( ) is continuously differentiable, that , and that the Jacobian matrix Then the set is an -dimensional surface containing .    This is a direction application of .    But may not be easy to verify in concrete situations. It seems easier to consider the image of a continuously differentiable map defined over an -dimensional region in the flat Euclidean plane as a prototype over which to define a general -dimensional surface. But in order for such a parametric representation to possess the usual properties of an -dimensional surface, we need to assume that at each point the Jacobian matrix has rank ; this will guarantee that the image of the map does not degenerate into a lower dimensional object and indeed looks like an -dimensional surface. Below is a more precise statement.   Suppose that is open, that is continuously differentiable for some , and that the Jacobian matrix has rank for some . Then there is a neighborhood of such that can be represented as a continuously differentiable graph of of its variables in terms of the remaining of its variables over a certain -dimensional domain in the Euclidean plane .   This is done as follows by applying the Inverse Function Theorem. For simplicity of notation, we will write out the case of . Here one may assume that at , then one applies the Inverse Function Theorem to to show that it has a continuously differentiable inverse defined on some open set of containing and is an open neighborhood of . Then defines the desired graph over .    It is often not necessary to find this graph representation explicitly, but work directly with the parametric representation  . For a geometric surface, one either imposes that be injective and has a continuous inverse on , or restricts to a small enough neighborhood so that this property holds. We call this a surface patch when with and for a general a manifold patch .   Volume of the Image of a Unit Hypercube under a Linear Map  Any notion of area of a surface or volume of a higher dimensional manifold must obey the universal property: In addition, when two surfaces are obtained from each other by an isometry such as translation, rotation, reflection, or bending, they should have equal area. For example, a round cylinder of diameter and height , when cut open along a generator on the side, unfolds into a rectangle of sides and , respectively, thus should have its area equal to .  A naive generalization of the idea of defining the area of a surface as the least upper bound of the area of the inscribed triangulated surfaces turns out not valid. H. A. Schwarz found that even in the case of the round cylinder, the least upper bound of area of the inscribed triangulated surfaces is . This is explained in Rad's Length and Area , AMS Colloquium Lectures, 1948.  Radó's description of H. A. Schwarz's discovery that the least upper bound of area of the inscribed triangulated surfaces of a section of the round cylinder is infinity.       Let's next work out how to compute the area of a patch of a surface lying on an -dimensional plane in as given by a parametric representation via a linear map. Let be an matrix with rank and . Consider  is an dimensional subspace of . Let be the standard cube in , then is a parallelepiped in , with , as edges. In the case of and , is a parallelogram with as edges and we know that its area can be computed as .  We now develop a formula for higher dimensional settings in the absence of cross product.  Volume of the Image of a Unit Hypercube under a Linear Map   In the setting above,     Choose an orthonormal basis of , and express each in terms of this basis: and let be the matrix . Then so in terms of the basis , can be treated as given by , and can be thought of as obtained from the unit cube in by applying the linear transformation through multiplication by , and by our earlier discussion On the other hand, the relations between and can be written as so using Now it follows that ( is square while may not be square, so we can not have ), and we arrive at .     Note that the entry of , is . This is one of the geometric origins for the Riemannian metric tensor and the appearance of the area (volume) form .  After we develop exterior algebra, we will find that so encodes the geometric relation between and formed from two bases of .    The area of the parallelogram in with and as its adjacent edges is given by     Find the area of the subset of the solution set of which orthogonally projects onto the unit square in the coordinate plane.   Find the areas of the triangles with and , and respectively with and , as vertices.   For the former it is ; for the latter it is .     Find the three dimensional volume of the tetrahedron in with , as vertices.   The three dimensional volume of a tetrahedron equals of the volume of a parallelepiped sharing three adjacent edges with the tetrahedron.      Volume of an -dimensional Differentiable Surface in  Even if is not given by a linear map, but is continuously differentiable, and its Jacobian matrix at any has rank , then we can still construct an orthonormal basis of (e.g. by the Gram-Schmidt orthogonalization procedure) and write where the entries of the matrix are continuous in ; furthermore, the above discussion about the role of still makes sense. Namely, is the ratio of volume of and volume of , when is a hypercube in the parameter space at , therefore, is the infinitesimal ratio of volume of and volume of when shrinks to . This leads us to define as the volume of  for any (Jordan-measurable) open domain of .  We can use the change of variables formula to check that this definition is independent of the parametrization, namely, if is a diffeomorphism from onto , then is another parametrization for , and we expect This follows by using the chain rule which leads to Since , , and are all square matrices, so This results in which, when applied to the left hand side of in making the change of variables , confirms .   The computations above indicate that, if we accept the formal relation in the sense of change of variables in integration, then is a geometric quantity independent of the parametrization, and is called the volume (area) form of the submanifold (surface) , and denoted by or .  Note also that if we define , then it is the entry of , and the relations above and become and   The and here are obtained through and respectively. There are other ways of obtaining such functions consisting of positive definite matrices associated with different parametrization and satisfying the above relations and . Once we have them we can use them to define the volume of a region and the integral of a function just as above. The and turn out to be the coordinate representations of a Riemannian metric .   In the case of and , and we know from the properties of cross product and dot product for three dimensional vectors that in this case.   Suppose that is a Jordan measurable open domain in , has continuous and bounded partial derivatives in . Then the graph of over has the representation with , so and for . To find , note that , which has eigenvalues with multiplicity and with multiplicity , so and the -dimensional volume of the graph of over is given by   The requirement that has continuous and bounded partial derivatives in can be relaxed when the integral above can be treated as an appropriate improper integral, such as in the case of the area of a hemisphere when represented as a graph.   The sphere in is circumscribed by the round cylinder . Both have parametric representation in terms of cylindrical coordinates, with the former given by and the latter by Note that so the area of the section of the sphere for is given by while so the area of the section of the cylinder for is given by The areas of these two sections are equal for any , which was first discovered by Archimedes. In particular, the area of the sphere is .  One could represent the upper hemisphere as a graph and use the integration of over to compute its area, but becomes unbounded as , so one has to deal with that issue. In the case here one needs to evaluate the improper integral , which can be converted into an improper integral in polar coordinate as .    Find the area of the region of the plane enclosed within the cylinder .    Find the area of the cylinder intersected between the planes .    Find the three dimensional volume of the sphere in by (i) treating it as the union of two graphs and evaluating an integral in , and (ii) using the parametric representation in spherical polar coordinates for .   For (i), after a change of variables into spherical polar coordinates, it reduces to ; for (ii), observe that the column vectors of the Jacobian matrix are orthogonal to each other.    Let be continuously differentiable on . Then it generates a surface of revolution via the parametrization Verify that the area of this surface is given by   and for both can be used to generate a surface of revolution sharing the boundary . which of them has less area?   Check whether Archimedes' observation about the area of the portion of a sphere between two parallel planes equal the area of the circumscribed cylinder between the same parallel planes holds in for . Namely, compare the area of the portion of the sphere between and that of , , for a general .     The integral of a Function on an -dimensional Differentiable Surface in  Suppose that is a parametrization for a surface patch and is a function defined in a set in which includes , then it is reasonable to define the integral of on by when this integral exists.  An analogous discussion as above shows that this definition is independent of the parametrization used. Thus we have reduced the integration of a function on a surface to the integration on a domain in the Euclidean space of a modified integrand. As a result, the usual properties of integrals such as the linearity in the integrand hold.   For any continuous function defined on the sphere in , using cylindrical representation, its integral on , is given by For example, But this integral could also be evaluated using the symmetry of the sphere       Evaluate .    Evaluate the integral , where is the region of the plane enclosed within the cylinder .    Evaluate the integral , where is the cylinder intersected between the planes .     In the setting of , suppose that is integrable in , the integral can be evaluated using the parametrization . Let , where we interpret as .   Verify that .  Verify that  Show that    Note that the integral is an integral on the leaf . This evaluation of the integral in terms of integrals on the leaves of level surfaces of some function is called co-area formula .  Here is a simple application of the co-area formula. To evaluate , we can choose . Then the set can be described as . Note that . Despite that fails to be differentiable at , we can still argue that       "
},
{
  "id": "def-m-surface",
  "level": "2",
  "url": "ch-integration-9.html#def-m-surface",
  "type": "Definition",
  "number": "6.7.1",
  "title": "Definition of an <span class=\"process-math\">\\(m\\)<\/span>-dimensional Differentiable Surface in <span class=\"process-math\">\\(\\bbR^{n}\\)<\/span>.",
  "body": "Definition of an -dimensional Differentiable Surface in   A subset of is called an -dimensional differentiable surface ( ), also called an -dimensional differentiable manifold , if for each point , there exists a neighborhood ( ) of in and a differentiable function defined in a neighborhood of the coordinate projection of to some -dimensional coordinate subspace , where, for simplicity of notation, we take , , and is open considered as a subset of , such that    "
},
{
  "id": "ch-integration-9-3-5",
  "level": "2",
  "url": "ch-integration-9.html#ch-integration-9-3-5",
  "type": "Proposition",
  "number": "6.7.2",
  "title": "",
  "body": " Suppose that ( ) is continuously differentiable, that , and that the Jacobian matrix Then the set is an -dimensional surface containing .    This is a direction application of .   "
},
{
  "id": "ch-integration-9-3-7",
  "level": "2",
  "url": "ch-integration-9.html#ch-integration-9-3-7",
  "type": "Proposition",
  "number": "6.7.3",
  "title": "",
  "body": " Suppose that is open, that is continuously differentiable for some , and that the Jacobian matrix has rank for some . Then there is a neighborhood of such that can be represented as a continuously differentiable graph of of its variables in terms of the remaining of its variables over a certain -dimensional domain in the Euclidean plane .   This is done as follows by applying the Inverse Function Theorem. For simplicity of notation, we will write out the case of . Here one may assume that at , then one applies the Inverse Function Theorem to to show that it has a continuously differentiable inverse defined on some open set of containing and is an open neighborhood of . Then defines the desired graph over .   "
},
{
  "id": "ch-integration-9-3-8",
  "level": "2",
  "url": "ch-integration-9.html#ch-integration-9-3-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "surface patch manifold patch "
},
{
  "id": "ch-integration-9-4-4",
  "level": "2",
  "url": "ch-integration-9.html#ch-integration-9-4-4",
  "type": "Figure",
  "number": "6.7.4",
  "title": "",
  "body": "Radó's description of H. A. Schwarz's discovery that the least upper bound of area of the inscribed triangulated surfaces of a section of the round cylinder is infinity.      "
},
{
  "id": "cubeform",
  "level": "2",
  "url": "ch-integration-9.html#cubeform",
  "type": "Theorem",
  "number": "6.7.5",
  "title": "Volume of the Image of a Unit Hypercube under a Linear Map.",
  "body": "Volume of the Image of a Unit Hypercube under a Linear Map   In the setting above,     Choose an orthonormal basis of , and express each in terms of this basis: and let be the matrix . Then so in terms of the basis , can be treated as given by , and can be thought of as obtained from the unit cube in by applying the linear transformation through multiplication by , and by our earlier discussion On the other hand, the relations between and can be written as so using Now it follows that ( is square while may not be square, so we can not have ), and we arrive at .   "
},
{
  "id": "ch-integration-9-4-8",
  "level": "2",
  "url": "ch-integration-9.html#ch-integration-9-4-8",
  "type": "Remark",
  "number": "6.7.6",
  "title": "",
  "body": " Note that the entry of , is . This is one of the geometric origins for the Riemannian metric tensor and the appearance of the area (volume) form .  After we develop exterior algebra, we will find that so encodes the geometric relation between and formed from two bases of .  "
},
{
  "id": "ch-integration-9-4-9",
  "level": "2",
  "url": "ch-integration-9.html#ch-integration-9-4-9",
  "type": "Example",
  "number": "6.7.7",
  "title": "",
  "body": " The area of the parallelogram in with and as its adjacent edges is given by   "
},
{
  "id": "ch-integration-9-4-10-1",
  "level": "2",
  "url": "ch-integration-9.html#ch-integration-9-4-10-1",
  "type": "Exercise",
  "number": "6.7.2.1",
  "title": "",
  "body": "Find the area of the subset of the solution set of which orthogonally projects onto the unit square in the coordinate plane.  "
},
{
  "id": "ch-integration-9-4-10-2",
  "level": "2",
  "url": "ch-integration-9.html#ch-integration-9-4-10-2",
  "type": "Exercise",
  "number": "6.7.2.2",
  "title": "",
  "body": "Find the areas of the triangles with and , and respectively with and , as vertices.   For the former it is ; for the latter it is .  "
},
{
  "id": "ch-integration-9-4-10-3",
  "level": "2",
  "url": "ch-integration-9.html#ch-integration-9-4-10-3",
  "type": "Exercise",
  "number": "6.7.2.3",
  "title": "",
  "body": "  Find the three dimensional volume of the tetrahedron in with , as vertices.   The three dimensional volume of a tetrahedron equals of the volume of a parallelepiped sharing three adjacent edges with the tetrahedron.   "
},
{
  "id": "ch-integration-9-5-2",
  "level": "2",
  "url": "ch-integration-9.html#ch-integration-9-5-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "volume of  "
},
{
  "id": "ch-integration-9-5-4",
  "level": "2",
  "url": "ch-integration-9.html#ch-integration-9-5-4",
  "type": "Remark",
  "number": "6.7.8",
  "title": "",
  "body": " The computations above indicate that, if we accept the formal relation in the sense of change of variables in integration, then is a geometric quantity independent of the parametrization, and is called the volume (area) form of the submanifold (surface) , and denoted by or .  Note also that if we define , then it is the entry of , and the relations above and become and   The and here are obtained through and respectively. There are other ways of obtaining such functions consisting of positive definite matrices associated with different parametrization and satisfying the above relations and . Once we have them we can use them to define the volume of a region and the integral of a function just as above. The and turn out to be the coordinate representations of a Riemannian metric .  "
},
{
  "id": "ch-integration-9-5-6",
  "level": "2",
  "url": "ch-integration-9.html#ch-integration-9-5-6",
  "type": "Example",
  "number": "6.7.9",
  "title": "",
  "body": " Suppose that is a Jordan measurable open domain in , has continuous and bounded partial derivatives in . Then the graph of over has the representation with , so and for . To find , note that , which has eigenvalues with multiplicity and with multiplicity , so and the -dimensional volume of the graph of over is given by   The requirement that has continuous and bounded partial derivatives in can be relaxed when the integral above can be treated as an appropriate improper integral, such as in the case of the area of a hemisphere when represented as a graph.  "
},
{
  "id": "ch-integration-9-5-7",
  "level": "2",
  "url": "ch-integration-9.html#ch-integration-9-5-7",
  "type": "Example",
  "number": "6.7.10",
  "title": "",
  "body": "The sphere in is circumscribed by the round cylinder . Both have parametric representation in terms of cylindrical coordinates, with the former given by and the latter by Note that so the area of the section of the sphere for is given by while so the area of the section of the cylinder for is given by The areas of these two sections are equal for any , which was first discovered by Archimedes. In particular, the area of the sphere is .  One could represent the upper hemisphere as a graph and use the integration of over to compute its area, but becomes unbounded as , so one has to deal with that issue. In the case here one needs to evaluate the improper integral , which can be converted into an improper integral in polar coordinate as .  "
},
{
  "id": "ch-integration-9-5-8-1",
  "level": "2",
  "url": "ch-integration-9.html#ch-integration-9-5-8-1",
  "type": "Exercise",
  "number": "6.7.3.1",
  "title": "",
  "body": "Find the area of the region of the plane enclosed within the cylinder .  "
},
{
  "id": "ch-integration-9-5-8-2",
  "level": "2",
  "url": "ch-integration-9.html#ch-integration-9-5-8-2",
  "type": "Exercise",
  "number": "6.7.3.2",
  "title": "",
  "body": " Find the area of the cylinder intersected between the planes .  "
},
{
  "id": "ch-integration-9-5-8-3",
  "level": "2",
  "url": "ch-integration-9.html#ch-integration-9-5-8-3",
  "type": "Exercise",
  "number": "6.7.3.3",
  "title": "",
  "body": " Find the three dimensional volume of the sphere in by (i) treating it as the union of two graphs and evaluating an integral in , and (ii) using the parametric representation in spherical polar coordinates for .   For (i), after a change of variables into spherical polar coordinates, it reduces to ; for (ii), observe that the column vectors of the Jacobian matrix are orthogonal to each other.   "
},
{
  "id": "ch-integration-9-5-8-4",
  "level": "2",
  "url": "ch-integration-9.html#ch-integration-9-5-8-4",
  "type": "Exercise",
  "number": "6.7.3.4",
  "title": "",
  "body": "Let be continuously differentiable on . Then it generates a surface of revolution via the parametrization Verify that the area of this surface is given by   and for both can be used to generate a surface of revolution sharing the boundary . which of them has less area?  "
},
{
  "id": "ch-integration-9-5-8-5",
  "level": "2",
  "url": "ch-integration-9.html#ch-integration-9-5-8-5",
  "type": "Exercise",
  "number": "6.7.3.5",
  "title": "",
  "body": "Check whether Archimedes' observation about the area of the portion of a sphere between two parallel planes equal the area of the circumscribed cylinder between the same parallel planes holds in for . Namely, compare the area of the portion of the sphere between and that of , , for a general .  "
},
{
  "id": "ch-integration-9-6-2",
  "level": "2",
  "url": "ch-integration-9.html#ch-integration-9-6-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "integral of on "
},
{
  "id": "ch-integration-9-6-4",
  "level": "2",
  "url": "ch-integration-9.html#ch-integration-9-6-4",
  "type": "Example",
  "number": "6.7.11",
  "title": "",
  "body": " For any continuous function defined on the sphere in , using cylindrical representation, its integral on , is given by For example, But this integral could also be evaluated using the symmetry of the sphere   "
},
{
  "id": "ch-integration-9-6-5-1",
  "level": "2",
  "url": "ch-integration-9.html#ch-integration-9-6-5-1",
  "type": "Exercise",
  "number": "6.7.4.1",
  "title": "",
  "body": "  Evaluate .   "
},
{
  "id": "ch-integration-9-6-5-2",
  "level": "2",
  "url": "ch-integration-9.html#ch-integration-9-6-5-2",
  "type": "Exercise",
  "number": "6.7.4.2",
  "title": "",
  "body": "Evaluate the integral , where is the region of the plane enclosed within the cylinder .  "
},
{
  "id": "ch-integration-9-6-5-3",
  "level": "2",
  "url": "ch-integration-9.html#ch-integration-9-6-5-3",
  "type": "Exercise",
  "number": "6.7.4.3",
  "title": "",
  "body": " Evaluate the integral , where is the cylinder intersected between the planes .  "
},
{
  "id": "ch-integration-9-6-5-4",
  "level": "2",
  "url": "ch-integration-9.html#ch-integration-9-6-5-4",
  "type": "Exercise",
  "number": "6.7.4.4",
  "title": "",
  "body": "  In the setting of , suppose that is integrable in , the integral can be evaluated using the parametrization . Let , where we interpret as .   Verify that .  Verify that  Show that    Note that the integral is an integral on the leaf . This evaluation of the integral in terms of integrals on the leaves of level surfaces of some function is called co-area formula .  Here is a simple application of the co-area formula. To evaluate , we can choose . Then the set can be described as . Note that . Despite that fails to be differentiable at , we can still argue that    "
},
{
  "id": "Math412-Notes-10-4",
  "level": "1",
  "url": "Math412-Notes-10-4.html",
  "type": "Section",
  "number": "7.1",
  "title": "A Brief Review of the Notion of Curl and Divergence of a Vector Field",
  "body": "A Brief Review of the Notion of Curl and Divergence of a Vector Field  In multi-variable calculus the line integral of a vector field along a path (or loop) , is defined as and the flux of across a surface , is defined as where is a (continuous) choice of unit normal vector to at . In both cases, the integrand is not a given scalar function but a bilinear function of a given vector field and of a tangent vector of the curve or a normal vector of the surface.  One natural question is what infinitesimal quantities measure the \"strength\" of the circulation of the vector field along a closed loop or flux of the vector field across a closed surface near a point? The answers turn out to be the curl and, respectively, divergence of the vector field at the point.  For , the curl of at is the vector For , we can treat as a special case of with and for depend only on , so the curl of such a vector field takes the form of The divergence of is the scalar function   The Stokes Theorem says that if is a differentiable closed loop (meaning ) in and spans a differentiable surface , then where is an appropriately chosen unit normal vector field to .  If we accept Stokes Theorem, it can be used to give some geometric interpretation for . Fix some and a plane containing with a unit normal vector . Take to be the disc in the plane of radius centered at and to be the boundary of this disc. Then Thus is the infinitesimal rate of circulation circulation per unit area of along closed loops surrounding in the plane through with unit normal .  In fact, we can see why is defined this way by examining without the knowledge of Stokes Theorem. We will see that, if the vector field is differentiable at , then this limit exists and is given by the expression above.  In the simple setting of the two dimensional plane, if is continuously differentiable in a neighborhood of , and we take to be a small square loop of side length around , then This is the simplest form of Green's theorem and motivates the definition of the curl of a two dimensional vector field as . Note that at any point , its value is determined as   In three dimension or higher, the simplest loops are planar ones, namely, a loop contained in the plane spanned by a pair of orthonormal vectors and --- we take to be the origin for simplicity, and be a closed loop near and enclosing in the plane spanned by and given as Assuming to have the necessary differentiability, then Taylor expansion gives the leading order term of to be where we have used that along any closed loop and but equals the area enclosed by --- one may take to be a square or circle loop to see this, so the leading order term of is In other words,   This derivation works for any dimension . We observe that this \"infinitesimal strength\" of circulation of along loops near depends on the above specific combinations of derivatives of as well as on the plane in terms of a choice of an orthonormal basis; and the dependence on these derivatives of and on and is linear in each when the remaining variables are held as constant this is the notion of a multi-linear function; here, we momentarily relax the condition that and are orthonormal and allow them to be any pair of vectors. Furthermore, the dependence on is antisymmetrical in , and if and are another pair of vectors such that , then the quantities and have a common proportionality constant equal to the determinant of the matrix that relates the two pairs of bases and equal when both bases are orthonormal.  Verify that if for some matrix , then , and that if and are orthonormal, then is an orthogonal matrix.  In the case of dimension , if we take then it is a unit normal to the plane spanned by and , and thus producing the concept of the curl of a vector field in dimension .  In the general dimension, using exterior algebra motivated by the above discussion and to be introduced soon, we see that are simply the components of , and is a bilinear antisymmetric function on (we may remove the orthonormal condition on now).  For any , the coefficient of above is . Thus the natural generalization of the notion of the curl of a vector field in , is not a vector field, but an object that acts on any pair of vectors in a bilinear and antisymmetric fashion. This is a heuristic reason for the notion of a tensor .  Another important question is how do vector fields and their curls transform under a change of variables ? This is particularly important in the theory of manifolds , where there is usually no canonical coordinates to work with.  If is a continuously differentiable change of variables, then any continuously differentiable curve is mapped to a continuously differentiable curve , with   Since the value of a vector field at any point is naturally identified to be the tangent vector of a continuously differentiable curve passing through that point, if are the components of the vector field at in the coordinates that is transformed from by , we expect   But the quantity , which is the integrand in , would then transform to in the coordinates. This is because encodes the Euclidean inner product between vectors in the coordinates, while the representation of this inner product in the coordinates may no longer have a simple form. This transformation is not only complicated, but makes it even harder to keep track of the relation between the components of the curl computed in the and coordinates.  It turns out that we get a much simpler resolution of this issue if we do not treat as a vector field, but as a field of covectors , namely, at each point , is a linear function on the vector space of tangent vectors at that point. The simplification is due to the transformation laws of vectors and covectors, to be introduced next. It is such consideration that makes differential forms, instead of vector-fields, the natural objects for integration on surfaces.   Determine where is the boundary of the disc of radius centered at of the plane    One could avoid finding explicitly an orthonormal basis for the plane by using .    "
},
{
  "id": "Math412-Notes-10-4-3",
  "level": "2",
  "url": "Math412-Notes-10-4.html#Math412-Notes-10-4-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "curl divergence "
},
{
  "id": "Math412-Notes-10-4-10",
  "level": "2",
  "url": "Math412-Notes-10-4.html#Math412-Notes-10-4-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "multi-linear "
},
{
  "id": "exe-extprod",
  "level": "2",
  "url": "Math412-Notes-10-4.html#exe-extprod",
  "type": "Exercise",
  "number": "7.1.1",
  "title": "",
  "body": "Verify that if for some matrix , then , and that if and are orthonormal, then is an orthogonal matrix. "
},
{
  "id": "Math412-Notes-10-4-14",
  "level": "2",
  "url": "Math412-Notes-10-4.html#Math412-Notes-10-4-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "tensor "
},
{
  "id": "Math412-Notes-10-4-19",
  "level": "2",
  "url": "Math412-Notes-10-4.html#Math412-Notes-10-4-19",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "covectors "
},
{
  "id": "Math412-Notes-10-4-20",
  "level": "2",
  "url": "Math412-Notes-10-4.html#Math412-Notes-10-4-20",
  "type": "Exercise",
  "number": "7.1.2",
  "title": "",
  "body": " Determine where is the boundary of the disc of radius centered at of the plane    One could avoid finding explicitly an orthonormal basis for the plane by using .   "
},
{
  "id": "Math412-Notes-10-5",
  "level": "1",
  "url": "Math412-Notes-10-5.html",
  "type": "Section",
  "number": "7.2",
  "title": "Dual space, Tensor product, and Exterior Algebra",
  "body": "Dual space, Tensor product, and Exterior Algebra  We are all familiar with representing a hyperplane in in the form of Restricting to the case , such a hyperplane can be thought of as the null space of the linear function  defined on the vectors .  Covectors and Dual Space   The set of all linear functions on a (finite dimensional) vector space is called the dual space of , and is denoted as . Elements of are called covectors.  A multilinear function of order if a function (with factors of ) such that is linear in each when the rest is held as fixed. Such an is also called a covariant tensor of order . The space of covariant tensors of order on is denoted as .    Each non-zero element in determines a hyperplane (through the origin) in , namely, a subspace of codimension one; and two such elements determine the same hyperplane, if they are non-zero multiple of each other.  There are at least two ways to describe a subspace of of codimension bigger than one. One way is as the intersection of several codimension one hypersurfaces: , namely, as the set of solutions of a system of linear homogeneous equations. If , then this is a codimension subspace. This is seen by writing out each in terms of its coefficients, then is the solution set of a system of linear equations in variables, with a coefficient matrix whose row rank is , thus the solution space is dimensional.  Another way is to choose a basis for a subspace of . But there are other choices for a basis of this subspace. Exterior algebra provides a convenient tool to identify a subspace (with orientation). Suppose is another basis of the subspace, then we can write for some coefficients . This would form a invertible matrix with as its entries. can be written compactly in a matrix form:   It turns out that the following product between vectors, a generalization of the cross product between vectors in called the exterior product , provides an efficient tool to describe oriented subspaces of . We first give a preliminary formal definition to illustrate its usage; a more precise definition, together with the justification for the existence\/construction of this product, will be given shortly.   Exterior Product   Let be a vector space. The exterior product is a product between such that it is linear in each factor and antisymmetric in : Furthermore, this product extends to any -tuple of vectors in which obeys associativity and is linear in each factor and antisymmetric in any adjacent pairs.    As an illustration, take , then   Back to . The algebraic rules of exterior algebra would lead to This is particularly easy to see in the case of : Thus the exterior product of a basis , up to the scaling factor , is independent of the choice of a basis for the subspace. In fact, the sign of can be used to identify whether the two bases and are in the same or opposite orientation of the subspace.   For any basis of a vector space , there is a unique basis of such that   Conversely, for any basis of , there is a unique basis of such that holds.    Dual Basis    above is called the dual basis of , and the latter is called the dual basis of .    Inner Product on a Vector Space   An inner product on a vector space is a symmetric positive definite covariant tensor of order , namely, a bilinear and symmetric function on such that unless . Such a is also called a metric.    On an inner product space one can define orthonormal bases. If two bases and are orthonormal with respect to a metric , and are related via , then the matrix must be an orthogonal matrix.  Isometry of a Metric   A linear map is called an isometry of , if holds for all .    This condition is equivalent to holds for all .  On an inner product space with as its inner product, there is an isomorphism such that This induces an inner product on via   An abstract vector space does not have a natural definition of volume even for cells of the form . But once an inner product is introduced, it is natural to define the dimensional volume of such cells to be whenever is an orthonormal basis. This volume is invariant under all isometries of . If is an orthonormal basis of and holds, then shows that the corresponding cell generated by has volume equal to ; in other words, the exterior vector encodes both the volume and orientation of the parallelepiped formed with these vectors as edges.  An inner product on is just a special kind of bilinear function on .  Tensor Product   The tensor product of any two linear functions on is the bilinear function   If and , then is defined by     Note that in general.  For any basis of for , defines an inner product on so that its dual basis is an orthonormal basis in this metric.  Alternating Form   An -linear function is called an alternating form on if   The subspace of alternating forms on is denoted as .    Alt Map   We define by , and define the wedge product , also called exterior product ,     Note that The following property will be used often. for .  In the case of , and In the case of we also get   It also follows that if . However, if and is a basis of , then   If is a basis of , then forms a basis of , and forms a basis of . forms a basis of , the space of symmetric two tensors of .  Alternatively, a tensor is determined by its actions on , while a tensor is determined by its actions on . Here is the dual basis of .  For any and , then a symmetric -tensor satisfies while an antisymmetric -tensor satisfies   For example, when , is three dimensional, while is one dimensional, and is determined by while is determined by   In computations sometimes may show up even when , but to identify the coefficients of the resulting alternating tensor, one needs to transform all terms in terms of the basis discussed above. For example, , and if we apply the Alt operation on it, we get a tensor in  which could be recognized to be but ends up identified as . The discussion here applies to higher order tensors as well.  We can treat vectors in as linear functions on , then tensor product and exterior product on make sense. For instance, for any , in the sense that and in the sense that .  For any linear transformation , there is a naturally defined adjoint map, labeled as , such that for any , In fact, one can define on in a similar way such that for any ,   For a metric on , is a metric on provided that is injective. In such a case, we call the pull-back metric of by .  When is an alternating tensor on , is an alternating tensor on . Furthermore, for two alternating tensors on ,   A property related to is that for any two bases and of , let and be their respective dual bases in , then for any vector , and covector , if then In the context of Stokes Theorem we will treat as the pairing between a vector and a covector and will apply the above transformation property when applying a change of variables.    Let be such that is identical to . Prove that there exists some constant such that .   Prove that is an isometry with respect to the metric iff for all .   Let be a basis of and be its dual basis. Let be a metric on , and . Then for the covector , we have , where are the coefficients of the inverse matrix of .   Prove the general case of .   Let be a basis of and . Prove that , where the wedge product has factors of .   Let be a basis of and be its dual basis in , a basis of and be its dual basis in . Let be a linear map and the matrix be the matrix representation of with respect to the bases and . Then is represented by with respect to the bases and .   Let and of be two bases of , and and be their respective dual bases in . Suppose that for some matrix . Prove that , where .    Prove and use it to show that for any covectors in and vectors in ,     "
},
{
  "id": "Math412-Notes-10-5-2",
  "level": "2",
  "url": "Math412-Notes-10-5.html#Math412-Notes-10-5-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear function "
},
{
  "id": "Math412-Notes-10-5-3",
  "level": "2",
  "url": "Math412-Notes-10-5.html#Math412-Notes-10-5-3",
  "type": "Definition",
  "number": "7.2.1",
  "title": "Covectors and Dual Space.",
  "body": "Covectors and Dual Space   The set of all linear functions on a (finite dimensional) vector space is called the dual space of , and is denoted as . Elements of are called covectors.  A multilinear function of order if a function (with factors of ) such that is linear in each when the rest is held as fixed. Such an is also called a covariant tensor of order . The space of covariant tensors of order on is denoted as .   "
},
{
  "id": "Math412-Notes-10-5-7",
  "level": "2",
  "url": "Math412-Notes-10-5.html#Math412-Notes-10-5-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "exterior product "
},
{
  "id": "Math412-Notes-10-5-8",
  "level": "2",
  "url": "Math412-Notes-10-5.html#Math412-Notes-10-5-8",
  "type": "Definition",
  "number": "7.2.2",
  "title": "Exterior Product.",
  "body": " Exterior Product   Let be a vector space. The exterior product is a product between such that it is linear in each factor and antisymmetric in : Furthermore, this product extends to any -tuple of vectors in which obeys associativity and is linear in each factor and antisymmetric in any adjacent pairs.   "
},
{
  "id": "Math412-Notes-10-5-10",
  "level": "2",
  "url": "Math412-Notes-10-5.html#Math412-Notes-10-5-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "orientation "
},
{
  "id": "Math412-Notes-10-5-11",
  "level": "2",
  "url": "Math412-Notes-10-5.html#Math412-Notes-10-5-11",
  "type": "Proposition",
  "number": "7.2.3",
  "title": "",
  "body": " For any basis of a vector space , there is a unique basis of such that   Conversely, for any basis of , there is a unique basis of such that holds.  "
},
{
  "id": "Math412-Notes-10-5-12",
  "level": "2",
  "url": "Math412-Notes-10-5.html#Math412-Notes-10-5-12",
  "type": "Definition",
  "number": "7.2.4",
  "title": "Dual Basis.",
  "body": " Dual Basis    above is called the dual basis of , and the latter is called the dual basis of .   "
},
{
  "id": "Math412-Notes-10-5-13",
  "level": "2",
  "url": "Math412-Notes-10-5.html#Math412-Notes-10-5-13",
  "type": "Definition",
  "number": "7.2.5",
  "title": "Inner Product on a Vector Space.",
  "body": "Inner Product on a Vector Space   An inner product on a vector space is a symmetric positive definite covariant tensor of order , namely, a bilinear and symmetric function on such that unless . Such a is also called a metric.   "
},
{
  "id": "Math412-Notes-10-5-15",
  "level": "2",
  "url": "Math412-Notes-10-5.html#Math412-Notes-10-5-15",
  "type": "Definition",
  "number": "7.2.6",
  "title": "Isometry of a Metric.",
  "body": "Isometry of a Metric   A linear map is called an isometry of , if holds for all .   "
},
{
  "id": "Math412-Notes-10-5-20",
  "level": "2",
  "url": "Math412-Notes-10-5.html#Math412-Notes-10-5-20",
  "type": "Definition",
  "number": "7.2.7",
  "title": "Tensor Product.",
  "body": "Tensor Product   The tensor product of any two linear functions on is the bilinear function   If and , then is defined by    "
},
{
  "id": "Math412-Notes-10-5-23",
  "level": "2",
  "url": "Math412-Notes-10-5.html#Math412-Notes-10-5-23",
  "type": "Definition",
  "number": "7.2.8",
  "title": "Alternating Form.",
  "body": "Alternating Form   An -linear function is called an alternating form on if   The subspace of alternating forms on is denoted as .   "
},
{
  "id": "Math412-Notes-10-5-24",
  "level": "2",
  "url": "Math412-Notes-10-5.html#Math412-Notes-10-5-24",
  "type": "Definition",
  "number": "7.2.9",
  "title": "Alt Map.",
  "body": "Alt Map   We define by , and define the wedge product , also called exterior product ,    "
},
{
  "id": "Math412-Notes-10-5-35",
  "level": "2",
  "url": "Math412-Notes-10-5.html#Math412-Notes-10-5-35",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "pull-back metric "
},
{
  "id": "Math412-Notes-10-5-38-1",
  "level": "2",
  "url": "Math412-Notes-10-5.html#Math412-Notes-10-5-38-1",
  "type": "Exercise",
  "number": "7.2.1",
  "title": "",
  "body": " Let be such that is identical to . Prove that there exists some constant such that .  "
},
{
  "id": "Math412-Notes-10-5-38-2",
  "level": "2",
  "url": "Math412-Notes-10-5.html#Math412-Notes-10-5-38-2",
  "type": "Exercise",
  "number": "7.2.2",
  "title": "",
  "body": "Prove that is an isometry with respect to the metric iff for all .  "
},
{
  "id": "Math412-Notes-10-5-38-3",
  "level": "2",
  "url": "Math412-Notes-10-5.html#Math412-Notes-10-5-38-3",
  "type": "Exercise",
  "number": "7.2.3",
  "title": "",
  "body": "Let be a basis of and be its dual basis. Let be a metric on , and . Then for the covector , we have , where are the coefficients of the inverse matrix of .  "
},
{
  "id": "Math412-Notes-10-5-38-4",
  "level": "2",
  "url": "Math412-Notes-10-5.html#Math412-Notes-10-5-38-4",
  "type": "Exercise",
  "number": "7.2.4",
  "title": "",
  "body": "Prove the general case of .  "
},
{
  "id": "Math412-Notes-10-5-38-5",
  "level": "2",
  "url": "Math412-Notes-10-5.html#Math412-Notes-10-5-38-5",
  "type": "Exercise",
  "number": "7.2.5",
  "title": "",
  "body": "Let be a basis of and . Prove that , where the wedge product has factors of .  "
},
{
  "id": "Math412-Notes-10-5-38-6",
  "level": "2",
  "url": "Math412-Notes-10-5.html#Math412-Notes-10-5-38-6",
  "type": "Exercise",
  "number": "7.2.6",
  "title": "",
  "body": "Let be a basis of and be its dual basis in , a basis of and be its dual basis in . Let be a linear map and the matrix be the matrix representation of with respect to the bases and . Then is represented by with respect to the bases and .  "
},
{
  "id": "Math412-Notes-10-5-38-7",
  "level": "2",
  "url": "Math412-Notes-10-5.html#Math412-Notes-10-5-38-7",
  "type": "Exercise",
  "number": "7.2.7",
  "title": "",
  "body": "Let and of be two bases of , and and be their respective dual bases in . Suppose that for some matrix . Prove that , where .  "
},
{
  "id": "Math412-Notes-10-5-38-8",
  "level": "2",
  "url": "Math412-Notes-10-5.html#Math412-Notes-10-5-38-8",
  "type": "Exercise",
  "number": "7.2.8",
  "title": "",
  "body": " Prove and use it to show that for any covectors in and vectors in ,   "
},
{
  "id": "Math412-Notes-10-6",
  "level": "1",
  "url": "Math412-Notes-10-6.html",
  "type": "Section",
  "number": "7.3",
  "title": "Vector Fields and Differential Forms",
  "body": "Vector Fields and Differential Forms  Definition and Basic Properties of Vector Fields and Differential One-Forms  We start with an initial definition of a vector field in a Euclidean domain; it is to be modified later to be suitable in a more general context such as on a differentiable surface.  Vector Field in a Euclidean Domain   Let be open. A vector field in is an -valued function . A vector field is continuous (differentiable) in if as an -valued function is continuous (differentiable) in .    We will use a vector field mostly in the operation of taking directional derivatives of differentiable functions. First, recall the directional derivative of a differentiable function in in the direction at a point : where . This relation holds for any differentiable curve passing through at and :    is called a tangent vector at . The set of tangent vectors at forms a vector space, called the tangent space of at , and is denoted as . For the situation here, is simply a copy of , and at different are identified with each other in a natural way. But we will see that this is not the case when we discuss the tangent space of a differentiable surface, as there is no obvious natural relations between vectors at different points, and it is important to associate a tangent vector to a specific point.  Suppose that is a continuous vector field on and is a continuously differentiable function on , then at each , is a tangent vector at and is a continuous function on .  The discussions in the previous paragraphs generalize to a (differentiable) surface in . We will first work with a patch of a differentiable surface as given by a differentiable map defined for the parameter for some open domain . A differentiable curve on the surface through is given in terms of , where is a differentiable curve in the parameter domain with . Then the chain rule implies that the tangent of the curve at , , is a linear combination of , where is an alternative notation for , namely, the partial derivative of with respect to its th coordinate. The span of these vectors forms the tangent space of the surface at .  In order for such a parametrization to represent a geometric -dimensional surface, we require that these vectors be linearly independent so the tangent space to the surface is -dimensional, namely the matrix has rank . Let denote this patch of differentiable surface. Then there is a well defined tangent space for every (or rather for every point on ). When is continuously differentiable, we have a sense that the tangent space varies continuously with . But that is not a topic to be taken up now. Instead, we first focus on how a tangent vector is used to compute the directional derivative of a differentiable function.  If is a differentiable function defined on , then its restriction to the surface becomes a function on the surface. To consider its differentiability properties on the surface, we use the parametrization to get a function in the parameter domain of , then its directional derivative at in the direction of is given by It is this kind of consideration that makes it natural to use to represent the tangent vector to the surface at , when is a parametric representation of the surface. Namely,   is a geometric tangent vector to the surface at arising from a curve whose parametrization in the parameter space runs along the direction.   means that, as an operator, represents directional derivative in the direction of the tangent .  Thus In this notation, forms a basis of . The advantage of this notation will become clear when a change of variable is used, which would cause a change of basis for the tangent space. We can write any as , then for .  Vector Field on a Differentiable Surface   A vector field on a differentiable surface is a map . Namely, it assigns to each a tangent vector to at .  When is given by a differentiable parametrization , any vector field on can be represented as  is said to be a continuous (or continuously differentiable) vector field on if the coefficient functions are continuous (or continuously differentiable) functions of .    We will often write for to simplify notations. Note that is a vector field on , but if the 's are not used in connection with the parametrization, then also represents a vector field in , which takes the vector everywhere in . One should watch out for the context in which this notation is used. In the latter context, a vector field in is simply an -valued function, so one can take its derivative and in this case for any . But in the former context, should be regarded as the tangent vector on , and should be related to . But this output in may not be a tangent vector to at . There is a way to obtain a tangent vector to at through orthogonal projection. This will introduce the notion of covariant differentiation of vector field on . But we will not pursue that topic in this course.   Vector fields on a graph  A graph of a differentiable function for can be parametrized as . Then the vector field is simply a coordinate representation for the geometric vector field on , and  is a basis of . In this notation is a coordinate representation in this basis for the vector field for , yet its values at different (or rather ) may not be identified as equal to each other. As a consequence, we may not have in contrast to the case if is used to represent a basis of the tangent space at a point in the flat Euclidean space.     Differential of a Function   For any differentiable function defined in and a fixed , the operation defines a linear function on , thus defines a cotangent vector in , called the differential of at , and is denoted as . Thus     This definition requires to be differentiable in a neighborhood of a point, it naturally defines a field of cotangent vectors in as varies in this neighborhood. It is an example of a one form , and in this case, is called the differential of .  When is a coordinate function, we find that thus we find and as one forms we have the classic formula   In older texts the differential was often used interchangeably with and referred to as the linear approximation to at . In the modern treatment, the differential is a linear function on tangent vectors, so after taking a tangent vector as input it gives the linear approximation to the increment of at along .  Note that forms the dual basis of , as A general one-form can be expressed as for some scalar functions . It is called continuous (differentiable) if these functions are continuous (differentiable). We will learn later that for a general domain not all continuous one-forms can be the differential of some continuously differentiable functions .  The above discussion adapts easily to the context of a differentiable surface such as represented in terms of a parametric representation for . Then forms the dual basis of . We will use for . Any one-form on can be represented as for some functions .  We next study the transformation laws of a vector field and a one-form under a change of coordinates. Suppose that for provides another parametrization for the same via the relation for some continuously differentiable with continuously differentiable inverse: . A parametrization with this property is called admissible .  In this set tup, for any differentiable function defined in a domain of containing , the chain rule implies  and are simply two different coordinate representations of the same function , so we have the following This is the transformation law between the two bases and for any . Note that is simply a form of the chain rule.  Suppose that is a vector field on , namely, is tangent to at , , then in addition to the relation we also have  which follows from and . also encodes the geometric information that when , then gives , which is another form of .  Note that if is a continuous vector field on and is a continuously differentiable function in a neighborhood of . Then is a continuous function on , which can be computed via any admissible parametrization of .  The dual of is Thus a one-form transforms to , where, using we have so it follows that In matrix notation, this transformation takes the form of   Treating as a function of , is simply a case of . But we should read both sides of as covectors in with .  As a consequence of , for any differentiable function on , its differential computed in two different parametrization satisfy   In multivariable calculus is called the gradient vector of and points in the direction of greatest ascend of with its magnitude representing the greatest ascend per unit length. Implicit in this statement is the use of Euclidean metric in the coordinate. If a change of coordinate is made, then the metric used to compute inner product between tangent vectors in the new coordinate may not take on the form of the usual Euclidean metric, and the transformed vector under may not agree with .  The concept of a gradient vector makes sense only with respect to a given metric. If is a given metric then the gradient vector of is defined to be with respect to the given metric , namely,    In the context of Stokes Theorem, suppose that in the integrand of the line integral, we treat as the coordinates of a one-form instead of a vector field, namely, and identify with the tangent vector , then and under the change of variable , transforms to and transforms to . We see that This also follows directly from and . Thus, when treated as a one-form, the line integral in Stokes Theorem is invariant under a change of variables.  Now that we have introduced tangent vectors and cotangent vectors, the algebraic tensor operations, including tensor product and exterior product, apply to them. Thus in addition to the tangent space and cotangent space at each point of , there are also spaces of higher order tensors. In an admissible parametrization , forms a basis of the space of covariant tensors of order of at , while forms a basis of the space of covariant alternating tensors of order of at .   In the case of two dimensions, if are the polar coordinates of , then Noting that being an orthogonal matrix, the above relation can be written as from which we obtain Thus a vector field in rectangular coordinates , when represented in polar coordinates, becomes   If we treat as equipped with the standard Euclidean metric, then is orthonormal, so its dual basis is also orthonormal in the induced metric on cotangent space . Since the relation between and is via an orthogonal matrix, therefore the latter is also orthonormal in the tangent space. It follows that in metric notation we have .  Note that the dual basis of is . So is orthonormal in the induced metric on cotangent space . This can also be confirmed by the computation where one uses . Treating as , one sees that is an orthonormal basis. In metric notation we have .  Note that if and are orthonormal dual basis, then . It follows in our case that , so .  We now treat the vector field as , and the one form can be computed as from which we can apply the operation to get the same result. In addition, if is a parametric curve in , then the line integral   Note that also gives   Finally, for a differentiable function , so taking operation gives This gives the gradient of in the polar coordinate as .  One also notes that in general. Instead,      Using the relation between rectangular and spherical polar coordinates in : to determine in terms of . Then for a differentiable function determine in terms of .   Use and substitute in terms of to identify .     On the sphere , consider and as coordinates for a portion of the upper hemisphere. Find the relations between and , as well as between and . Identify a choice of the domain on which the change of coordinates between these two sets of coordinates is continuously differentiable and has continuously differentiable inverse.   Rewrite the system of ODE as a system in the polar coordinate of and the partial derivatives of with respect to and .     Tangent Map\/Differential and its Pull-Back of a Differentiable Map  Suppose that is differentiable, then for any , is a linear map from to mapping to , and is denoted as , and is often called the tangent map (or even called the differential and denoted as ) of at .  The action of can also be seen through how a differentiable function on is differentiated through : , namely, to treat as tangent vector at . When is a parametrization map, we have identified in our notation with .  Note that is determined in terms of the first derivatives of , so a more accurate notation would have been or , but it has been a traditional to use as the matrix representation of under the chosen coordinates.  This notion and notation turn out to be very useful. Suppose . Write out in components Then each is a differentiable function of , thus   The geometric interpretation of the linear map is seen as follows. For any , is a curve in passing through with tangent at , and is a curve in passing through at , its tangent at is Thus . In components we see This is a reason for using as a common notation for . Another way of writing this relation is to note that where . Namely, It is easier to understand this relation in terms of the following diagram. Using the dual maps (or pull-backs), we have where, if we denote , then , and We note that many books use to denote , and to denote . Thus we have the corresponding relation , and the pull-back operation behaves like substitution in the differential: , etc.   Some of these definitions and operational rules may seem abstract and formal. But they are mostly the chain rule in different disguise and capture the essence of differential calculus. In particular, the pull-back operation is essentially the substitution rule for differentials: may be considered as differential forms in , and when is a differentiable function of , is just to substitute to get as a one form in the space.  Part of the reason for the complication of the notation is that it needs to reflect the dependence on the base point and the tangent vector. For instance, is well defined when and needs to act on a tangent vector .  Relying entirely on parentheses as delimiters for different inputs and operations can be tiring, so we often use braket notation to denote . In this notation, we have   The pull-back operation has the advantage that for any differential form defined on (or on a surface in ), is a well defined a differential form in the variable in making it possible for us to do computations in the Euclidean parameter domain, while for a vector field in the variable, defines a vector at , but it may not be considered as a vector field in the variable, as there may be such that , and may not equal .    Our consideration for the dual space of the space of tangent vectors and the pull-back maps on tensors is because they provide a natural setting for us to relate to whenever there is a differentiable map . For our specific problem of developing an integration theory on differential forms, we often take to be a standard cell (such as a cube or simplex) in , the pull-back maps allow us to represent forms on as forms on the cell in the Euclidean space and use the developed integration theory in the Euclidean space as a tool.    Consider given by   Compute .  Compute , , and .  Compute .  Let . Compute , , , , and .  Compute and .     Let . Compute , and .     "
},
{
  "id": "Math412-Notes-10-6-2-3",
  "level": "2",
  "url": "Math412-Notes-10-6.html#Math412-Notes-10-6-2-3",
  "type": "Definition",
  "number": "7.3.1",
  "title": "Vector Field in a Euclidean Domain.",
  "body": "Vector Field in a Euclidean Domain   Let be open. A vector field in is an -valued function . A vector field is continuous (differentiable) in if as an -valued function is continuous (differentiable) in .   "
},
{
  "id": "Math412-Notes-10-6-2-5",
  "level": "2",
  "url": "Math412-Notes-10-6.html#Math412-Notes-10-6-2-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "tangent vector tangent space "
},
{
  "id": "Math412-Notes-10-6-2-10",
  "level": "2",
  "url": "Math412-Notes-10-6.html#Math412-Notes-10-6-2-10",
  "type": "Definition",
  "number": "7.3.2",
  "title": "Vector Field on a Differentiable Surface.",
  "body": "Vector Field on a Differentiable Surface   A vector field on a differentiable surface is a map . Namely, it assigns to each a tangent vector to at .  When is given by a differentiable parametrization , any vector field on can be represented as  is said to be a continuous (or continuously differentiable) vector field on if the coefficient functions are continuous (or continuously differentiable) functions of .   "
},
{
  "id": "Math412-Notes-10-6-2-11",
  "level": "2",
  "url": "Math412-Notes-10-6.html#Math412-Notes-10-6-2-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "covariant differentiation "
},
{
  "id": "Math412-Notes-10-6-2-12",
  "level": "2",
  "url": "Math412-Notes-10-6.html#Math412-Notes-10-6-2-12",
  "type": "Example",
  "number": "7.3.3",
  "title": "Vector fields on a graph.",
  "body": " Vector fields on a graph  A graph of a differentiable function for can be parametrized as . Then the vector field is simply a coordinate representation for the geometric vector field on , and  is a basis of . In this notation is a coordinate representation in this basis for the vector field for , yet its values at different (or rather ) may not be identified as equal to each other. As a consequence, we may not have in contrast to the case if is used to represent a basis of the tangent space at a point in the flat Euclidean space.  "
},
{
  "id": "Math412-Notes-10-6-2-13",
  "level": "2",
  "url": "Math412-Notes-10-6.html#Math412-Notes-10-6-2-13",
  "type": "Definition",
  "number": "7.3.4",
  "title": "Differential of a Function.",
  "body": " Differential of a Function   For any differentiable function defined in and a fixed , the operation defines a linear function on , thus defines a cotangent vector in , called the differential of at , and is denoted as . Thus    "
},
{
  "id": "Math412-Notes-10-6-2-14",
  "level": "2",
  "url": "Math412-Notes-10-6.html#Math412-Notes-10-6-2-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "field one form "
},
{
  "id": "Math412-Notes-10-6-2-17",
  "level": "2",
  "url": "Math412-Notes-10-6.html#Math412-Notes-10-6-2-17",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "one-form "
},
{
  "id": "Math412-Notes-10-6-2-19",
  "level": "2",
  "url": "Math412-Notes-10-6.html#Math412-Notes-10-6-2-19",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "admissible "
},
{
  "id": "Math412-Notes-10-6-2-26",
  "level": "2",
  "url": "Math412-Notes-10-6.html#Math412-Notes-10-6-2-26",
  "type": "Remark",
  "number": "7.3.5",
  "title": "",
  "body": "In multivariable calculus is called the gradient vector of and points in the direction of greatest ascend of with its magnitude representing the greatest ascend per unit length. Implicit in this statement is the use of Euclidean metric in the coordinate. If a change of coordinate is made, then the metric used to compute inner product between tangent vectors in the new coordinate may not take on the form of the usual Euclidean metric, and the transformed vector under may not agree with .  The concept of a gradient vector makes sense only with respect to a given metric. If is a given metric then the gradient vector of is defined to be with respect to the given metric , namely,   "
},
{
  "id": "Math412-Notes-10-6-2-29",
  "level": "2",
  "url": "Math412-Notes-10-6.html#Math412-Notes-10-6-2-29",
  "type": "Example",
  "number": "7.3.6",
  "title": "",
  "body": " In the case of two dimensions, if are the polar coordinates of , then Noting that being an orthogonal matrix, the above relation can be written as from which we obtain Thus a vector field in rectangular coordinates , when represented in polar coordinates, becomes   If we treat as equipped with the standard Euclidean metric, then is orthonormal, so its dual basis is also orthonormal in the induced metric on cotangent space . Since the relation between and is via an orthogonal matrix, therefore the latter is also orthonormal in the tangent space. It follows that in metric notation we have .  Note that the dual basis of is . So is orthonormal in the induced metric on cotangent space . This can also be confirmed by the computation where one uses . Treating as , one sees that is an orthonormal basis. In metric notation we have .  Note that if and are orthonormal dual basis, then . It follows in our case that , so .  We now treat the vector field as , and the one form can be computed as from which we can apply the operation to get the same result. In addition, if is a parametric curve in , then the line integral   Note that also gives   Finally, for a differentiable function , so taking operation gives This gives the gradient of in the polar coordinate as .  One also notes that in general. Instead,   "
},
{
  "id": "Math412-Notes-10-6-2-30-1",
  "level": "2",
  "url": "Math412-Notes-10-6.html#Math412-Notes-10-6-2-30-1",
  "type": "Exercise",
  "number": "7.3.1.1",
  "title": "",
  "body": " Using the relation between rectangular and spherical polar coordinates in : to determine in terms of . Then for a differentiable function determine in terms of .   Use and substitute in terms of to identify .   "
},
{
  "id": "Math412-Notes-10-6-2-30-2",
  "level": "2",
  "url": "Math412-Notes-10-6.html#Math412-Notes-10-6-2-30-2",
  "type": "Exercise",
  "number": "7.3.1.2",
  "title": "",
  "body": " On the sphere , consider and as coordinates for a portion of the upper hemisphere. Find the relations between and , as well as between and . Identify a choice of the domain on which the change of coordinates between these two sets of coordinates is continuously differentiable and has continuously differentiable inverse.  "
},
{
  "id": "Math412-Notes-10-6-2-30-3",
  "level": "2",
  "url": "Math412-Notes-10-6.html#Math412-Notes-10-6-2-30-3",
  "type": "Exercise",
  "number": "7.3.1.3",
  "title": "",
  "body": "Rewrite the system of ODE as a system in the polar coordinate of and the partial derivatives of with respect to and .  "
},
{
  "id": "Math412-Notes-10-6-3-2",
  "level": "2",
  "url": "Math412-Notes-10-6.html#Math412-Notes-10-6-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "tangent map "
},
{
  "id": "Math412-Notes-10-6-3-7",
  "level": "2",
  "url": "Math412-Notes-10-6.html#Math412-Notes-10-6-3-7",
  "type": "Remark",
  "number": "7.3.7",
  "title": "",
  "body": " Some of these definitions and operational rules may seem abstract and formal. But they are mostly the chain rule in different disguise and capture the essence of differential calculus. In particular, the pull-back operation is essentially the substitution rule for differentials: may be considered as differential forms in , and when is a differentiable function of , is just to substitute to get as a one form in the space.  Part of the reason for the complication of the notation is that it needs to reflect the dependence on the base point and the tangent vector. For instance, is well defined when and needs to act on a tangent vector .  Relying entirely on parentheses as delimiters for different inputs and operations can be tiring, so we often use braket notation to denote . In this notation, we have   The pull-back operation has the advantage that for any differential form defined on (or on a surface in ), is a well defined a differential form in the variable in making it possible for us to do computations in the Euclidean parameter domain, while for a vector field in the variable, defines a vector at , but it may not be considered as a vector field in the variable, as there may be such that , and may not equal .  "
},
{
  "id": "Math412-Notes-10-6-3-8",
  "level": "2",
  "url": "Math412-Notes-10-6.html#Math412-Notes-10-6-3-8",
  "type": "Remark",
  "number": "7.3.8",
  "title": "",
  "body": " Our consideration for the dual space of the space of tangent vectors and the pull-back maps on tensors is because they provide a natural setting for us to relate to whenever there is a differentiable map . For our specific problem of developing an integration theory on differential forms, we often take to be a standard cell (such as a cube or simplex) in , the pull-back maps allow us to represent forms on as forms on the cell in the Euclidean space and use the developed integration theory in the Euclidean space as a tool.  "
},
{
  "id": "Math412-Notes-10-6-3-9-1",
  "level": "2",
  "url": "Math412-Notes-10-6.html#Math412-Notes-10-6-3-9-1",
  "type": "Exercise",
  "number": "7.3.2.1",
  "title": "",
  "body": "Consider given by   Compute .  Compute , , and .  Compute .  Let . Compute , , , , and .  Compute and .    "
},
{
  "id": "Math412-Notes-10-6-3-9-2",
  "level": "2",
  "url": "Math412-Notes-10-6.html#Math412-Notes-10-6-3-9-2",
  "type": "Exercise",
  "number": "7.3.2.2",
  "title": "",
  "body": "Let . Compute , and .  "
},
{
  "id": "Math412-Notes-10-7",
  "level": "1",
  "url": "Math412-Notes-10-7.html",
  "type": "Section",
  "number": "7.4",
  "title": "Exterior Differential Operator <span class=\"process-math\">\\(d\\)<\/span> and Boundary Operator <span class=\"process-math\">\\(\\partial\\)<\/span>",
  "body": "Exterior Differential Operator and Boundary Operator   We now introduce the two most central objects in the study of integration of differential forms, the exterior differential operator on differential forms and boundary operator on singular cubes or chains .   Exterior Differential Operator  We use to denote the tangent space at . Let denote the tangent bundle of , and denote the set of -forms on : it assigns an alternating tensor of order at each point of . Such a form is called differentiable if the coefficients of the form in the standard basis are differentiable functions. In fact, we will take to mean the set of -forms that are infinitely times differentiable. The slight complication of this notation is to give indication that elements in and in have a value at each base point, while the notation does not have any relation with a base point.  For a differentiable function , may be regarded as the output of a linear operator   We now extend this operator to for . Any can be expressed as . We define Since , we have Recall that our discussion on the curl of a vector field in higher dimensions leads us to this object: if we treat the vector field as a one form , then the curl of corresponds to .  For , it turns out to be natural to define in a similar way: express and define In other words, for any single term , its exterior differential is simply We will discuss soon why this definition is natural.  For example, for such an with in , using and similar computations we get   The most important properties of this operator are summarized in the following theorem; the central ones are the last two.  Properties of the Exterior Differential Operater      for any .   for any   , namely, for any .   for any differentiable map .      In the case of , the property is demonstrated as This can also be seen by applying the rules of exterior differentiation: using and , which can be verified more easily.   Let be a continuous -form in and be a differentiable map from to .  Compute , , , and .  If for , verify that and .      be a differentiable map from to . Compute .   Compute .     The Boundary Operator, Singular Chain, and Stokes Theorem  Since -forms act on -tuples of vectors, or -dimensional subspaces, we now discuss the geometric objects which interact with -forms. Our ultimate goal is to introduce -dimensional surfaces or manifolds. A proper definition of the latter requires some preparation. Informally we can think of a -dimensional surface as pieced together by reasonably well behaved patches. Here \"reasonably well behaved\" means that it can be represented by a parametric map defined on a simple domain in , and a simple domain is meant either the standard cube or the standard simplex (another commonly used notation is ), defined as . The latter is a generalization of triangle in and tetrahedron in .  Piecing together the patches would require consideration of the \"faces\" and other lower dimensional edges of the patches. Both the cube and the simplex have relative simple description of their faces and lower dimensional edges. For the purpose of developing integration, the cube is easier, for the integration limits are easy. But it is even easier to catalog all lower dimensional faces and edges of the simplex, for the simplex has vertices defined by requiring any of the inequalities in the definition of to be equalities, and any dimensional edge\/face of corresponds to setting of the inequalities in the definition of to be equalities, which has vertices. For , its dimensional faces are easy to describe: it has one pair corresponding to each being or ; however, it has vertices vs the vertices of , and not any choice of vertices of correspond to an dimensional edge\/face of .  We will follow Spivak to focus on using as our standard domain. An actual theory of piecing together patches modeled on either or is difficult. In two dimension, it amounts to showing that any surface (to be properly defined) can be triangulated. One way to bypass this task is to use a partition of unity to write the integrand a differential form in this context as the sum of some terms, each of which has support in a cube.  For now we will only focus on how a -form defined on interacts with a single -dimensional patch in , called a singular -cube , defined as a continuous (or differentiable) map . We will not require to be bijective, or the Jacobian of to have rank everywhere, so may not be a -dimensional geometric object, or has a clear lower dimensional faces\/edges. But we will use to pull back to , then becomes a -form on , and has clearly defined lower dimensional faces\/edges.  In fact, since our set up was to study the integration of a -form on the -dimensional boundary faces of a singular -cube, we will change to be a singular -cube now. has  -dimensional faces, and each face of has identical geometry as . Since or gives rise to a face of , we denote such a face by or respectively. Technically define namely, setting the th component of to be , and assigning the components in the through position as . Similarly for . Then and each defines a singular -cube in .  We will let to take either or and integrate on and define To consider the effect of the integration of on all faces of we will consider an appropriate algebraic sum of these integrals. The result amounts to considering some algebraic sums of the 's, and leads to the definition of a -chain as a finite sum of singular -cubes with integer coefficients.   The Boundary of a Singular Cube and a Singular Chain   The boundary of the singular -cube is defined to be   The boundary of a -chain, , is defined as .    The reason for this choice of sign will become clear in the proof of Stokes Theorem.   The sum in the definition of the boundary is a formal sum of maps from into to A, not as a sum of vector-valued functions. For one thing, if , then as the sum of vector-valued functions may not take values in . Secondly, we are going to use only in the context of how they pull back forms on to those on : .  Let's take the case of for , and , . Then the vector-valued algebraic sum of and is the map . Then for any differential form defined in , , while if we take , then . If we consider the vector-valued sum , it is , which may not take value in for a certain range of .   As a simple illustration of the integral of a -form on a -cube or chain, consider the case of : suppose that is a -form in , and is a -cube, then , so   In the case that for some differentiable function , , and , so   Once these definitions are properly developed, we are be ready to prove a version of Stokes Theorem on a singular cube (or chain).  Stokes Theorem on Singular Chains   If is a -form in , and is a singular -cube (or chain), then      is a -form on , so can be written as where means that the is omitted in the wedge product. Then   We claim that and This is because and (Heuristically, on these faces is a constant, so when applied to tangent vectors in these faces), so, for , , and will have only one term arising from with in : The same argument works for .  Note that so But integrating out the -th coordinate first gives so It is now clear from the definition of that      This version of the Stokes Theorem is formulated as integrals on standard cells and of forms pulled back by a map defined on . In concrete situations often defines a -dimensional differentiable surface with the restriction of to the boundary of defining -dimensional differentiable surfaces. In such cases the integrals can be considered as defined on these geometric surfaces. The case gives the classical Stokes Theorem for a surface parametrized via a map from see the example below for details. If we encounter more complicated surfaces in applications, we need to partition the surface as the non-overlapping union of several pieces which may share some common edges and each piece can be parametrized via a map from , one then needs to account for the contributions from the difference pieces in the boundary integral .  In some sense, the operator and the boundary are motivated and defined to make the Stokes Theorem hold in the general setting.  The operator also has the property that . It is a reflection of the property that each of the faces of has -dimensional edges, and when computing , each of these edges appears as the edge of exactly two faces with opposite orientation! The proof given in Spivak is merely an analytical way of book-keeping this property.    Example relating the integral of a two form to a classical surface integral  Consider the two form in . Suppose is a singular -cube. We defined as . Let's see a more concrete form of . Note that so and if we use to denote the unit vector in the direction of (when it is not ), then and Recall that the integral of gives the surface area of the parametric surface over the parameter domain, and the integral on the right hand side above is identified as the surface integral   Because of this relation one often finds in older texts that is written as on a surface .  If we look at the term involving or individually, say, the term , then according to the change of variables formula in integration, provided that . In other words, this integral can be treated as an integral in the coordinate plane. When the sign is not specified, the integral takes into account of the orientation of the projection, such as in the case that is a parametrization for the round sphere that includes portions of both the upper and lower hemisphere, where will be positive in some region while negative in some other region, so the resulting integral reflects this. As a result, can be interpreted as projecting to each of the possible two dimensional coordinate planes and computing the integral of the projected component in the projected domain, taking into account of the orientation of the projection, and summing up these integrals.  For example, if is a parametrization for the upper half unit sphere centered at the origin, then its projection onto the plane will be two-to-one, with the right half and left half carrying opposite signs in the Jacobian. Suppose the unit normal corresponding to the parametrization is outward with respect to the sphere. Since is the -component of the normal, we know it is positive when lands on the right half of the sphere and is negative and when lands on the left half of the sphere. If , then the factor would also take opposite signs on the two halves of the sphere, so , , which results in provided the parametrization gives a positive Jacobian when (which is the case if points upward).  If one chooses to use as a parametrization, then one could also use this parametrization to evaluate the integral directly, using and get   A third option to evaluate the above integral is to think of as part of for some singular -cube (or chain). One could imagine defining a -cube mapping into the upper half unit ball such that its restriction to its top face gives rise to , its restriction to its bottom face gives rise to a parametrization for the unit disk in the plane , and its restriction to its lateral faces maps to the unit circle , then But on the bottom face, , so in the integral. On the other hand, we can apply the Stokes' Theorem to get A similar consideration for how to compute integrals of a -form leads us to conclude that is the volume of the upper half unit sphere.  In higher dimensions, a surface may no longer have a notion of a normal vector, but the latter interpretation of projecting on each coordinate plane still applies.    Define for . For any differentiable -form in , work out and .   Let be a differentiable map from to and be a differentiable -form in . Work out and .   Let be an integer and . Define as a map . For any , construct a map such that as a singular -chain.   If is a singular -cube in with , show that there is an integer such that for some -chain . Here .     Closed and Exact Forms    A -form is called closed if ; it is called exact if there exists a -form such that .    Note that, due to , any exact form must be closed.  Questions that we need to address include  How do we check whether a form is closed or exact?  Is every closed form also exact?    Since for any one form we have it's clear that iff for all . These are conditions on components of .  For a two-form , and if one examines the coefficient of for some , one gets So if and only if all the triple sums above are equal to zero. But these conditions are not that easy to comprehend. In dimension , a two form would have components, and encodes equations.  Based on our observation earlier that for any one-form would satisfy , we get plenty of solutions this way, and the solutions are in terms of arbitrary differentiable functions as components of in regions of . Whether these provide all possible solutions is the second question raised above.The answer turns out to depend on the topology of the domain.  The one form is closed on , but is not exact, for it were equal to for some differentiable function on , then for any -cube in , as the simplest form of Stokes' Theorem. As a consequence, when . But if we take , , we find that .    A domain is called star-shaped if there exists a point such that for any and any , .    Poincaré Lemma  Assume that is an open star-shaped domain in , then any closed form on is an exact form.   We may assume that is star-shaped with respect to the origin. The key information we use is that for is a homotopy in of and . The heart of the argument is that there exists for such that As a result, when , we find .  Let's assume that For each , is a -form on . Note that and .  Consideration for leads to the -form on   defines a -form on by We define More concretely, is obtained from by only keeping terms with one factor of and the remaining factors of , then dropping the factor (as its action on would be ) and adjusting the sign according to the position of , and integrating out the resulting expression in to get It is then straightforward to verify that Below are the verifications. while Adding the above two terms completes our verification.    We used a specific homotopy in this proof for a star-shaped domain; this proof can be adapted to work for other homotopy. In particular, it can be used to show that if is a (differentiable) homotopy for , and is a closed form, then is exact, and often one can construct an explicitly as described in the proof of Poincaré's Lemma so that .    Let be the -form on .  Show that is closed on but not exact in .  Show also that is exact on .  Suppose that is a -form on such that , prove that for some and and .      With for , and being closed on , we can write for some function satisfying . Show that the number is independent of .    Consider the two-form on .  Verify that .  Suppose that is differentiable. Verify that   Suppose that is injective and so that is a differentiable surface in . Show that , where is a unit normal to the parametric surface at .  Choose the spherical polar coordinate parametrization for the sphere defined for to show that is an outward normal and that .  Show that for any continuous -form in , .  Show that there does not exist a -form in such that in .       "
},
{
  "id": "Math412-Notes-10-7-2-1",
  "level": "2",
  "url": "Math412-Notes-10-7.html#Math412-Notes-10-7-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "singular cubes chains "
},
{
  "id": "Math412-Notes-10-7-3-2",
  "level": "2",
  "url": "Math412-Notes-10-7.html#Math412-Notes-10-7-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "tangent bundle "
},
{
  "id": "Math412-Notes-10-7-3-8",
  "level": "2",
  "url": "Math412-Notes-10-7.html#Math412-Notes-10-7-3-8",
  "type": "Theorem",
  "number": "7.4.1",
  "title": "Properties of the Exterior Differential Operater <span class=\"process-math\">\\(d\\)<\/span>.",
  "body": "Properties of the Exterior Differential Operater      for any .   for any   , namely, for any .   for any differentiable map .     "
},
{
  "id": "Math412-Notes-10-7-3-10-1",
  "level": "2",
  "url": "Math412-Notes-10-7.html#Math412-Notes-10-7-3-10-1",
  "type": "Exercise",
  "number": "7.4.1.1",
  "title": "",
  "body": "Let be a continuous -form in and be a differentiable map from to .  Compute , , , and .  If for , verify that and .    "
},
{
  "id": "Math412-Notes-10-7-3-10-2",
  "level": "2",
  "url": "Math412-Notes-10-7.html#Math412-Notes-10-7-3-10-2",
  "type": "Exercise",
  "number": "7.4.1.2",
  "title": "",
  "body": " be a differentiable map from to . Compute .  "
},
{
  "id": "Math412-Notes-10-7-3-10-3",
  "level": "2",
  "url": "Math412-Notes-10-7.html#Math412-Notes-10-7-3-10-3",
  "type": "Exercise",
  "number": "7.4.1.3",
  "title": "",
  "body": "Compute .  "
},
{
  "id": "Math412-Notes-10-7-4-4",
  "level": "2",
  "url": "Math412-Notes-10-7.html#Math412-Notes-10-7-4-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "partition of unity "
},
{
  "id": "Math412-Notes-10-7-4-5",
  "level": "2",
  "url": "Math412-Notes-10-7.html#Math412-Notes-10-7-4-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "singular -cube "
},
{
  "id": "Math412-Notes-10-7-4-7",
  "level": "2",
  "url": "Math412-Notes-10-7.html#Math412-Notes-10-7-4-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "-chain "
},
{
  "id": "Math412-Notes-10-7-4-8",
  "level": "2",
  "url": "Math412-Notes-10-7.html#Math412-Notes-10-7-4-8",
  "type": "Definition",
  "number": "7.4.2",
  "title": "The Boundary of a Singular Cube and a Singular Chain.",
  "body": " The Boundary of a Singular Cube and a Singular Chain   The boundary of the singular -cube is defined to be   The boundary of a -chain, , is defined as .   "
},
{
  "id": "Math412-Notes-10-7-4-10",
  "level": "2",
  "url": "Math412-Notes-10-7.html#Math412-Notes-10-7-4-10",
  "type": "Remark",
  "number": "7.4.3",
  "title": "",
  "body": " The sum in the definition of the boundary is a formal sum of maps from into to A, not as a sum of vector-valued functions. For one thing, if , then as the sum of vector-valued functions may not take values in . Secondly, we are going to use only in the context of how they pull back forms on to those on : .  Let's take the case of for , and , . Then the vector-valued algebraic sum of and is the map . Then for any differential form defined in , , while if we take , then . If we consider the vector-valued sum , it is , which may not take value in for a certain range of .  "
},
{
  "id": "Math412-Notes-10-7-4-14",
  "level": "2",
  "url": "Math412-Notes-10-7.html#Math412-Notes-10-7-4-14",
  "type": "Theorem",
  "number": "7.4.4",
  "title": "Stokes Theorem on Singular Chains.",
  "body": "Stokes Theorem on Singular Chains   If is a -form in , and is a singular -cube (or chain), then      is a -form on , so can be written as where means that the is omitted in the wedge product. Then   We claim that and This is because and (Heuristically, on these faces is a constant, so when applied to tangent vectors in these faces), so, for , , and will have only one term arising from with in : The same argument works for .  Note that so But integrating out the -th coordinate first gives so It is now clear from the definition of that    "
},
{
  "id": "Math412-Notes-10-7-4-15",
  "level": "2",
  "url": "Math412-Notes-10-7.html#Math412-Notes-10-7-4-15",
  "type": "Remark",
  "number": "7.4.5",
  "title": "",
  "body": " This version of the Stokes Theorem is formulated as integrals on standard cells and of forms pulled back by a map defined on . In concrete situations often defines a -dimensional differentiable surface with the restriction of to the boundary of defining -dimensional differentiable surfaces. In such cases the integrals can be considered as defined on these geometric surfaces. The case gives the classical Stokes Theorem for a surface parametrized via a map from see the example below for details. If we encounter more complicated surfaces in applications, we need to partition the surface as the non-overlapping union of several pieces which may share some common edges and each piece can be parametrized via a map from , one then needs to account for the contributions from the difference pieces in the boundary integral .  In some sense, the operator and the boundary are motivated and defined to make the Stokes Theorem hold in the general setting.  The operator also has the property that . It is a reflection of the property that each of the faces of has -dimensional edges, and when computing , each of these edges appears as the edge of exactly two faces with opposite orientation! The proof given in Spivak is merely an analytical way of book-keeping this property.  "
},
{
  "id": "Math412-Notes-10-7-4-16",
  "level": "2",
  "url": "Math412-Notes-10-7.html#Math412-Notes-10-7-4-16",
  "type": "Example",
  "number": "7.4.6",
  "title": "Example relating the integral of a two form to a classical surface integral.",
  "body": " Example relating the integral of a two form to a classical surface integral  Consider the two form in . Suppose is a singular -cube. We defined as . Let's see a more concrete form of . Note that so and if we use to denote the unit vector in the direction of (when it is not ), then and Recall that the integral of gives the surface area of the parametric surface over the parameter domain, and the integral on the right hand side above is identified as the surface integral   Because of this relation one often finds in older texts that is written as on a surface .  If we look at the term involving or individually, say, the term , then according to the change of variables formula in integration, provided that . In other words, this integral can be treated as an integral in the coordinate plane. When the sign is not specified, the integral takes into account of the orientation of the projection, such as in the case that is a parametrization for the round sphere that includes portions of both the upper and lower hemisphere, where will be positive in some region while negative in some other region, so the resulting integral reflects this. As a result, can be interpreted as projecting to each of the possible two dimensional coordinate planes and computing the integral of the projected component in the projected domain, taking into account of the orientation of the projection, and summing up these integrals.  For example, if is a parametrization for the upper half unit sphere centered at the origin, then its projection onto the plane will be two-to-one, with the right half and left half carrying opposite signs in the Jacobian. Suppose the unit normal corresponding to the parametrization is outward with respect to the sphere. Since is the -component of the normal, we know it is positive when lands on the right half of the sphere and is negative and when lands on the left half of the sphere. If , then the factor would also take opposite signs on the two halves of the sphere, so , , which results in provided the parametrization gives a positive Jacobian when (which is the case if points upward).  If one chooses to use as a parametrization, then one could also use this parametrization to evaluate the integral directly, using and get   A third option to evaluate the above integral is to think of as part of for some singular -cube (or chain). One could imagine defining a -cube mapping into the upper half unit ball such that its restriction to its top face gives rise to , its restriction to its bottom face gives rise to a parametrization for the unit disk in the plane , and its restriction to its lateral faces maps to the unit circle , then But on the bottom face, , so in the integral. On the other hand, we can apply the Stokes' Theorem to get A similar consideration for how to compute integrals of a -form leads us to conclude that is the volume of the upper half unit sphere.  In higher dimensions, a surface may no longer have a notion of a normal vector, but the latter interpretation of projecting on each coordinate plane still applies.  "
},
{
  "id": "Math412-Notes-10-7-4-17-1",
  "level": "2",
  "url": "Math412-Notes-10-7.html#Math412-Notes-10-7-4-17-1",
  "type": "Exercise",
  "number": "7.4.2.1",
  "title": "",
  "body": "Define for . For any differentiable -form in , work out and .  "
},
{
  "id": "Math412-Notes-10-7-4-17-2",
  "level": "2",
  "url": "Math412-Notes-10-7.html#Math412-Notes-10-7-4-17-2",
  "type": "Exercise",
  "number": "7.4.2.2",
  "title": "",
  "body": "Let be a differentiable map from to and be a differentiable -form in . Work out and .  "
},
{
  "id": "Math412-Notes-10-7-4-17-3",
  "level": "2",
  "url": "Math412-Notes-10-7.html#Math412-Notes-10-7-4-17-3",
  "type": "Exercise",
  "number": "7.4.2.3",
  "title": "",
  "body": "Let be an integer and . Define as a map . For any , construct a map such that as a singular -chain.  "
},
{
  "id": "Math412-Notes-10-7-4-17-4",
  "level": "2",
  "url": "Math412-Notes-10-7.html#Math412-Notes-10-7-4-17-4",
  "type": "Exercise",
  "number": "7.4.2.4",
  "title": "",
  "body": "If is a singular -cube in with , show that there is an integer such that for some -chain . Here .  "
},
{
  "id": "Math412-Notes-10-7-5-2",
  "level": "2",
  "url": "Math412-Notes-10-7.html#Math412-Notes-10-7-5-2",
  "type": "Definition",
  "number": "7.4.7",
  "title": "",
  "body": "  A -form is called closed if ; it is called exact if there exists a -form such that .   "
},
{
  "id": "Math412-Notes-10-7-5-9",
  "level": "2",
  "url": "Math412-Notes-10-7.html#Math412-Notes-10-7-5-9",
  "type": "Definition",
  "number": "7.4.8",
  "title": "",
  "body": "  A domain is called star-shaped if there exists a point such that for any and any , .   "
},
{
  "id": "Math412-Notes-10-7-5-10",
  "level": "2",
  "url": "Math412-Notes-10-7.html#Math412-Notes-10-7-5-10",
  "type": "Theorem",
  "number": "7.4.9",
  "title": "Poincaré Lemma.",
  "body": "Poincaré Lemma  Assume that is an open star-shaped domain in , then any closed form on is an exact form.   We may assume that is star-shaped with respect to the origin. The key information we use is that for is a homotopy in of and . The heart of the argument is that there exists for such that As a result, when , we find .  Let's assume that For each , is a -form on . Note that and .  Consideration for leads to the -form on   defines a -form on by We define More concretely, is obtained from by only keeping terms with one factor of and the remaining factors of , then dropping the factor (as its action on would be ) and adjusting the sign according to the position of , and integrating out the resulting expression in to get It is then straightforward to verify that Below are the verifications. while Adding the above two terms completes our verification.   "
},
{
  "id": "Math412-Notes-10-7-5-11",
  "level": "2",
  "url": "Math412-Notes-10-7.html#Math412-Notes-10-7-5-11",
  "type": "Remark",
  "number": "7.4.10",
  "title": "",
  "body": "We used a specific homotopy in this proof for a star-shaped domain; this proof can be adapted to work for other homotopy. In particular, it can be used to show that if is a (differentiable) homotopy for , and is a closed form, then is exact, and often one can construct an explicitly as described in the proof of Poincaré's Lemma so that .  "
},
{
  "id": "Math412-Notes-10-7-5-12-1",
  "level": "2",
  "url": "Math412-Notes-10-7.html#Math412-Notes-10-7-5-12-1",
  "type": "Exercise",
  "number": "7.4.3.1",
  "title": "",
  "body": "Let be the -form on .  Show that is closed on but not exact in .  Show also that is exact on .  Suppose that is a -form on such that , prove that for some and and .      With for , and being closed on , we can write for some function satisfying . Show that the number is independent of .   "
},
{
  "id": "Math412-Notes-10-7-5-12-2",
  "level": "2",
  "url": "Math412-Notes-10-7.html#Math412-Notes-10-7-5-12-2",
  "type": "Exercise",
  "number": "7.4.3.2",
  "title": "",
  "body": "Consider the two-form on .  Verify that .  Suppose that is differentiable. Verify that   Suppose that is injective and so that is a differentiable surface in . Show that , where is a unit normal to the parametric surface at .  Choose the spherical polar coordinate parametrization for the sphere defined for to show that is an outward normal and that .  Show that for any continuous -form in , .  Show that there does not exist a -form in such that in .    "
},
{
  "id": "Math412-Notes-11-1",
  "level": "1",
  "url": "Math412-Notes-11-1.html",
  "type": "References",
  "number": "",
  "title": "References",
  "body": "References  P. Lax: Rethinking the Lebesgue Integral , The American Mathematical Monthly, Dec., 2009, Vol. 116, No. 10 (Dec., 2009), pp. 863-881.  James Munkres: Analysis on Manifolds , 1991, Addison-Wesley Publishing Company.  Walter Rudin: Principles of Mathematical Analysis , 3rd edition (1976), McGraw-Hill.  Michael Spivak: Calculus on Manifolds , 1965, Addison-Wesley Publishing Company.  Min-qiang Zhou: Theory of Functions of A Real Variable (in Chinese), 3rd edition (2001), Peking University Press.  Vladimir A. Zorich: Mathematical Analysis I, II , 2nd edition (2016), Springer-Verlag Berlin Heidelberg.  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
