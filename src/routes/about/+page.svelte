<script>
	import InfoBox from '$lib/components/InfoBox.svelte';
</script>

<h1 class="text-5xl">About</h1>
<hr class=" border-yellow-200 border-t-2" />
<p class="mt-5 max-w-prose text-blue-50">
	The Loyola Blakefield Cyber Competition, or LBC2, is an
	<span class="font-bold italic">all-day, student-ran, in-person</span>
	event ran by Loyola Blakefield's Cyber Science Informatics program, for all students grades 8-12. There's
	no cost to attend, thanks to our sponsors!
</p>

<InfoBox>
	<div class="flex gap-4 flex-col items-center lg:items-start lg:flex-row">
		<img src="/images/lbcsiLogo.png" class="max-w-[256px] lg:w-auto w-1/2 h-auto object-contain" alt="LBCSI Logo">
		<div class="flex-1">
			<h2 class="text-2xl font-semibold">> LBCSI</h2>
			<div class="text-blue-50 max-w-prose">
				The Cyber Science program at Loyola Blakefield provides students with industry-caliber skills
				required by today's fast-growing employers and offers them the most advanced opportunities to
				apply those skills in the classroom. The program further enables students to test drive their
				future careers by participating in many student-led projects, national competitions, and local
				internship opportunities. LBCSI fosters the talents and ambitions of its students, preparing
				them to excel in the professional field.
			</div>
			<div>
				Learn more about LBCSI at <a class="underline text-blue-200" href="https://www.loyolablakefield.org/academics/signature-programs/cyber-science">loyolablakefield.org</a>.
			</div>
		</div>
	</div>
</InfoBox>
