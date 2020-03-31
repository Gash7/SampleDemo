package com.cg.cucumberTesting;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="Features",
		glue="com.cg.Testing",
		monochrome=true,
		dryRun=false,
		strict=false,
		plugin={"pretty","json:output/cucumber.json","junit:output/cucumberxml.xml","html:output"})

public class TestRunner {
	public static void main(String[] args) {
		System.out.println("tEST RUNNER");
	}
	
}
